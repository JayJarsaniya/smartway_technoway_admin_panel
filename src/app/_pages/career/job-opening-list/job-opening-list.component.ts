import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { JobService, Job, JobFilter } from '../../../services/api';

@Component({
  selector: 'app-job-opening-list',
  templateUrl: './job-opening-list.component.html',
  styleUrls: ['./job-opening-list.component.scss']
})
export class JobOpeningListComponent implements OnInit {

  origin: string = location.origin
  jobs: Job[] = [];
  loading: boolean = false;
  filter: JobFilter = {};
  selectedJob: Job | null = null;
  isEditMode: boolean = false;
  jobForm: Partial<Job> = {};
  skillInput: string = '';
  responsibilityInput: string = '';

  get isFilterApplied(): boolean {
    return !!(this.filter.title || this.filter.location || this.filter.jobType);
  }

  get activeFilterCount(): number {
    let count = 0;
    if (this.filter.title) count++;
    if (this.filter.location) count++;
    if (this.filter.jobType) count++;
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

  SelectOption_2: any = []
  SelectOption2 = [
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
    private jobService: JobService
  ) { }


  ngOnInit(): void {
    this.loadJobs();
  }

  loadJobs(): void {
    this.loading = true;
    this.jobService.getJobs(this.filter).subscribe({
      next: (response) => {
        if (response.success) {
          this.jobs = response.data;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading jobs:', error);
        this.loading = false;
      }
    });
  }

  applyFilter(): void {
    this.loadJobs();
  }

  resetFilter(): void {
    this.filter = {};
    this.loadJobs();
  }

  deleteJob(id: string): void {
    if (confirm('Are you sure you want to delete this job?')) {
      this.jobService.deleteJob(id).subscribe({
        next: () => {
          this.loadJobs();
        },
        error: (error) => {
          console.error('Error deleting job:', error);
        }
      });
    }
  }

  viewJob(job: Job): void {
    this.selectedJob = job;
  }

  editJob(job: Job): void {
    this.selectedJob = job;
    this.isEditMode = true;
    this.jobForm = { ...job };
  }

  addNewJob(): void {
    this.selectedJob = null;
    this.isEditMode = false;
    this.jobForm = {
      title: '',
      location: '',
      jobType: '',
      experience: '',
      openings: 1,
      description: '',
      requiredSkills: [],
      responsibilities: [],
      isActive: true
    };
    this.skillInput = '';
    this.responsibilityInput = '';
  }

  saveJob(): void {
    if (this.isEditMode && this.selectedJob) {
      this.jobService.updateJob(this.selectedJob._id, this.jobForm).subscribe({
        next: () => {
          this.loadJobs();
          this.resetForm();
        },
        error: (error) => {
          console.error('Error updating job:', error);
        }
      });
    } else {
      this.jobService.createJob(this.jobForm).subscribe({
        next: () => {
          this.loadJobs();
          this.resetForm();
        },
        error: (error) => {
          console.error('Error creating job:', error);
        }
      });
    }
  }

  resetForm(): void {
    this.selectedJob = null;
    this.isEditMode = false;
    this.jobForm = {};
    this.skillInput = '';
    this.responsibilityInput = '';
  }

  addSkill(): void {
    if (this.skillInput.trim()) {
      if (!this.jobForm.requiredSkills) this.jobForm.requiredSkills = [];
      this.jobForm.requiredSkills.push(this.skillInput.trim());
      this.skillInput = '';
    }
  }

  removeSkill(index: number): void {
    this.jobForm.requiredSkills?.splice(index, 1);
  }

  addResponsibility(): void {
    if (this.responsibilityInput.trim()) {
      if (!this.jobForm.responsibilities) this.jobForm.responsibilities = [];
      this.jobForm.responsibilities.push(this.responsibilityInput.trim());
      this.responsibilityInput = '';
    }
  }

  removeResponsibility(index: number): void {
    this.jobForm.responsibilities?.splice(index, 1);
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

}
