import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { TestimonialService, Testimonial, TestimonialFilter } from '../../services/api';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent implements OnInit {

  origin: string = location.origin
  testimonials: Testimonial[] = [];
  loading: boolean = false;
  filter: TestimonialFilter = {};
  selectedTestimonial: Testimonial | null = null;
  isEditMode: boolean = false;
  testimonialForm: Partial<Testimonial> = {};
  testimonialToDelete: Testimonial | null = null;
  toastMessage: string = '';
  toastType: 'success' | 'error' | '' = '';

  get isFilterApplied(): boolean {
    return !!(this.filter.name || this.filter.designation || this.filter.rating);
  }

  get activeFilterCount(): number {
    let count = 0;
    if (this.filter.name) count++;
    if (this.filter.designation) count++;
    if (this.filter.rating) count++;
    return count;
  }

  SelectOption: any = []
  SelectOption1 = [
    {
      value: 1,
      label: 'Option 1'
    },
    {
      value: 2,
      label: 'Option 2'
    }
  ];

  datepickerConfig1: any = <BsDatepickerConfig>{ containerClass: '', dateInputFormat: 'DD/MM/ YYYY', adaptivePosition: true, showWeekNumbers: false };

  dateRange1: any = Date

  onOpenCalendar(container: any) {
    console.log(container);
    container.monthSelectHandler = (event: any): void => {
      container._store.dispatch(container._actions.select(event.date));
    }
    container.setViewMode('month');
  }

  onDateChange(event: any): void {
    // console.log('Start Date changed:', event);
  }

  //For datepicker Code End

  constructor(
    private dtpicker: BsDatepickerConfig,
    private testimonialService: TestimonialService
  ) { }


  ngOnInit(): void {
    this.loadTestimonials();
  }

  loadTestimonials(): void {
    this.loading = true;
    this.testimonialService.getTestimonials(this.filter).subscribe({
      next: (response) => {
        if (response.success) {
          this.testimonials = response.data;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading testimonials:', error);
        this.loading = false;
      }
    });
  }

  applyFilter(): void {
    this.loadTestimonials();
  }

  resetFilter(): void {
    this.filter = {};
    this.loadTestimonials();
  }

  addNewTestimonial(): void {
    this.selectedTestimonial = null;
    this.isEditMode = false;
    this.testimonialForm = {
      name: '',
      designation: '',
      message: '',
      rating: 5
    };
  }

  editTestimonial(testimonial: Testimonial): void {
    this.selectedTestimonial = testimonial;
    this.isEditMode = true;
    this.testimonialForm = { ...testimonial };
  }

  saveTestimonial(): void {
    if (this.isEditMode && this.selectedTestimonial) {
      this.testimonialService.updateTestimonial(this.selectedTestimonial._id, this.testimonialForm).subscribe({
        next: () => {
          this.loadTestimonials();
          this.resetForm();
          this.showToast('Review updated successfully!', 'success');
        },
        error: (error) => {
          console.error('Error updating testimonial:', error);
          this.showToast('Failed to update review. Please try again.', 'error');
        }
      });
    } else {
      this.testimonialService.createTestimonial(this.testimonialForm).subscribe({
        next: () => {
          this.loadTestimonials();
          this.resetForm();
          this.showToast('Review added successfully!', 'success');
        },
        error: (error) => {
          console.error('Error creating testimonial:', error);
          this.showToast('Failed to add review. Please try again.', 'error');
        }
      });
    }
  }

  deleteTestimonial(testimonial: Testimonial): void {
    this.testimonialToDelete = testimonial;
  }

  confirmDelete(): void {
    if (this.testimonialToDelete) {
      this.testimonialService.deleteTestimonial(this.testimonialToDelete._id).subscribe({
        next: () => {
          this.loadTestimonials();
          this.testimonialToDelete = null;
          this.showToast('Review deleted successfully!', 'success');
        },
        error: (error) => {
          console.error('Error deleting testimonial:', error);
          this.showToast('Failed to delete review. Please try again.', 'error');
        }
      });
    }
  }

  cancelDelete(): void {
    this.testimonialToDelete = null;
  }

  resetForm(): void {
    this.selectedTestimonial = null;
    this.isEditMode = false;
    this.testimonialForm = {};
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  }

  truncateText(text: string, limit: number = 50): string {
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  }

  getStars(rating: number): string[] {
    return Array(5).fill('').map((_, i) => i < rating ? '★' : '☆');
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
