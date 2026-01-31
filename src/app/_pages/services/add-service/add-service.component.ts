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
    // Renumber steps
    this.service.processSection!.steps.forEach((step, i) => {
      step.step = i + 1;
    });
  }

  onSubmit(): void {
    this.loading = true;
    
    if (this.isEditMode) {
      this.serviceService.updateService(this.service._id!, this.service).subscribe({
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
      this.serviceService.createService(this.service).subscribe({
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