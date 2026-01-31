import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService, Service, ServiceFilter } from '../../../services/api';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent implements OnInit {
  services: Service[] = [];
  loading: boolean = false;
  filter: ServiceFilter = {};
  serviceToDelete: Service | null = null;
  toastMessage: string = '';
  toastType: 'success' | 'error' | '' = '';

  get isFilterApplied(): boolean {
    return !!(this.filter.title || this.filter.status);
  }

  get activeFilterCount(): number {
    let count = 0;
    if (this.filter.title) count++;
    if (this.filter.status) count++;
    return count;
  }

  constructor(
    private serviceService: ServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadServices();
  }

  loadServices(): void {
    this.loading = true;
    this.serviceService.getServices(this.filter).subscribe({
      next: (response) => {
        if (response.success) {
          this.services = response.data;
        }
        this.loading = false;
      },
      error: (error) => {
        this.showToast('Error loading services', 'error');
        this.loading = false;
      }
    });
  }

  applyFilter(): void {
    this.loadServices();
  }

  resetFilter(): void {
    this.filter = {};
    this.loadServices();
  }

  addNewService(): void {
    this.router.navigate(['/services/add-service']);
  }

  editService(service: Service): void {
    this.router.navigate(['/services/add-service', service.slug]);
  }

  viewService(service: Service): void {
    this.router.navigate(['/services/service-detail', service.slug]);
  }

  deleteService(service: Service): void {
    this.serviceToDelete = service;
  }

  confirmDelete(): void {
    if (this.serviceToDelete) {
      this.serviceService.deleteService(this.serviceToDelete._id).subscribe({
        next: () => {
          this.showToast('Service deleted successfully', 'success');
          this.loadServices();
          this.serviceToDelete = null;
        },
        error: () => {
          this.showToast('Error deleting service', 'error');
        }
      });
    }
  }

  cancelDelete(): void {
    this.serviceToDelete = null;
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  }

  truncateText(text: string, limit: number = 100): string {
    return text.length > limit ? text.substring(0, limit) + '...' : text;
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