import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService, Service } from '../../../services/api';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})
export class AddServiceComponent implements OnInit {
  service: Partial<Service> = {
    title: '',
    slug: '',
    card: { shortDescription: '', icon: '' },
    heroSection: { headline: '', subHeadline: '' },
    servicesOverview: { title: '', description: '', services: [] },
    processSection: { title: '', steps: [] },
    status: 'active'
  };
  isEditMode = false;
  loading = false;
  toastMessage = '';
  toastType: 'success' | 'error' | '' = '';
  
  // File storage
  cardIconFile: File | null = null;
  serviceIconFiles: { [key: number]: File } = {};
  stepIconFiles: { [key: number]: File } = {};

  constructor(
    private serviceService: ServiceService,
    public router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.isEditMode = true;
      this.loadService(slug);
    }
  }

  loadService(slug: string): void {
    this.loading = true;
    this.serviceService.getServiceBySlug(slug).subscribe({
      next: (response) => {
        if (response.success) {
          this.service = response.data;
        }
        this.loading = false;
      },
      error: () => {
        this.showToast('Error loading service', 'error');
        this.loading = false;
      }
    });
  }

  onTitleChange(): void {
    if (!this.isEditMode && this.service.title) {
      this.service.slug = this.serviceService.generateSlug(this.service.title);
    }
  }

  addService(): void {
    this.service.servicesOverview!.services.push({
      title: '',
      description: '',
      icon: ''
    } as any);
  }

  removeService(index: number): void {
    this.service.servicesOverview!.services.splice(index, 1);
    delete this.serviceIconFiles[index];
  }

  addStep(): void {
    const stepNumber = this.service.processSection!.steps.length + 1;
    this.service.processSection!.steps.push({
      step: stepNumber,
      title: '',
      icon: ''
    } as any);
  }

  removeStep(index: number): void {
    this.service.processSection!.steps.splice(index, 1);
    delete this.stepIconFiles[index];
    // Renumber steps
    this.service.processSection!.steps.forEach((step, i) => {
      step.step = i + 1;
    });
  }

  onCardIconFileSelect(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.cardIconFile = file;
    }
  }

  onServiceIconFileSelect(event: any, index: number): void {
    const file = event.target.files[0];
    if (file) {
      this.serviceIconFiles[index] = file;
    }
  }

  onStepIconFileSelect(event: any, index: number): void {
    const file = event.target.files[0];
    if (file) {
      this.stepIconFiles[index] = file;
    }
  }

  private createFormData(): FormData {
    const formData = new FormData();
    
    // Add required fields
    formData.append('title', this.service.title || '');
    formData.append('slug', this.service.slug || '');
    
    // Add card fields with bracket notation
    if (this.service.card?.shortDescription) {
      formData.append('card[shortDescription]', this.service.card.shortDescription);
    }
    
    // Add hero section fields with bracket notation
    if (this.service.heroSection?.headline) {
      formData.append('heroSection[headline]', this.service.heroSection.headline);
    }
    if (this.service.heroSection?.subHeadline) {
      formData.append('heroSection[subHeadline]', this.service.heroSection.subHeadline);
    }
    
    // Add services overview fields with bracket notation
    if (this.service.servicesOverview?.title) {
      formData.append('servicesOverview[title]', this.service.servicesOverview.title);
    }
    if (this.service.servicesOverview?.description) {
      formData.append('servicesOverview[description]', this.service.servicesOverview.description);
    }
    
    // Add services array items
    if (this.service.servicesOverview?.services && this.service.servicesOverview.services.length > 0) {
      this.service.servicesOverview.services.forEach((service, index) => {
        formData.append(`servicesOverview[services][${index}][id]`, service.title.toLowerCase().replace(/\s+/g, '-'));
        formData.append(`servicesOverview[services][${index}][title]`, service.title);
        formData.append(`servicesOverview[services][${index}][description]`, service.description);
        formData.append(`servicesOverview[services][${index}][icon]`, service.icon || '');
      });
    }
    
    // Add process section fields with bracket notation
    if (this.service.processSection?.title) {
      formData.append('processSection[title]', this.service.processSection.title);
    }
    
    // Add steps array items
    if (this.service.processSection?.steps && this.service.processSection.steps.length > 0) {
      this.service.processSection.steps.forEach((step, index) => {
        formData.append(`processSection[steps][${index}][step]`, step.step.toString());
        formData.append(`processSection[steps][${index}][title]`, step.title);
        formData.append(`processSection[steps][${index}][icon]`, step.icon || '');
      });
    }
    
    // Add file fields
    if (this.cardIconFile) {
      formData.append('cardIcon', this.cardIconFile);
    }
    
    Object.keys(this.serviceIconFiles).forEach(index => {
      formData.append(`serviceIcon${index}`, this.serviceIconFiles[+index]);
    });
    
    Object.keys(this.stepIconFiles).forEach(index => {
      formData.append(`stepIcon${index}`, this.stepIconFiles[+index]);
    });
    
    return formData;
  }

  onSubmit(): void {
    this.loading = true;
    const formData = this.createFormData();

    if (this.isEditMode) {
      this.serviceService.updateService(this.service._id!, formData).subscribe({
        next: () => {
          this.showToast('Service updated successfully', 'success');
          setTimeout(() => this.router.navigate(['/services/service-list']), 1500);
        },
        error: () => {
          this.showToast('Error updating service', 'error');
          this.loading = false;
        }
      });
    } else {
      this.serviceService.createService(formData).subscribe({
        next: () => {
          this.showToast('Service created successfully', 'success');
          setTimeout(() => this.router.navigate(['/services/service-list']), 1500);
        },
        error: () => {
          this.showToast('Error creating service', 'error');
          this.loading = false;
        }
      });
    }
  }

  showToast(message: string, type: 'success' | 'error'): void {
    this.toastMessage = message;
    this.toastType = type;
    setTimeout(() => {
      this.toastMessage = '';
      this.toastType = '';
    }, 3000);
  }
}