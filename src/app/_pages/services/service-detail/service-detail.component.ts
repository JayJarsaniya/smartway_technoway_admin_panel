import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService, Service } from '../../../services/api';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent implements OnInit {
  service: Service | null = null;
  loading = false;

  constructor(
    private serviceService: ServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('id');
    if (slug) {
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
        this.loading = false;
        this.router.navigate(['/services/service-list']);
      }
    });
  }

  editService(): void {
    if (this.service) {
      this.router.navigate(['/services/add-service', this.service.slug]);
    }
  }

  goBack(): void {
    this.router.navigate(['/services/service-list']);
  }
}