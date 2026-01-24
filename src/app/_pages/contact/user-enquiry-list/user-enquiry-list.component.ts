import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { ContactService, Contact, ContactFilter } from '../../../services/contact.service';

@Component({
  selector: 'app-user-enquiry-list',
  templateUrl: './user-enquiry-list.component.html',
  styleUrls: ['./user-enquiry-list.component.scss']
})
export class UserEnquiryListComponent implements OnInit {

  origin: string = location.origin
  contacts: Contact[] = [];
  allContacts: Contact[] = [];
  loading: boolean = false;
  filter: ContactFilter = {};

  get isFilterApplied(): boolean {
    return !!(this.filter.name || this.filter.email);
  }

  get activeFilterCount(): number {
    let count = 0;
    if (this.filter.name) count++;
    if (this.filter.email) count++;
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

  SelectOption_3: any = []
  SelectOption3 = [
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
    private contactService: ContactService
  ) { }


  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts(): void {
    this.loading = true;
    this.contactService.getContacts(this.filter).subscribe({
      next: (response) => {
        if (response.success) {
          this.contacts = response.data;
          this.allContacts = response.data;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading contacts:', error);
        this.loading = false;
      }
    });
  }

  applyFilter(): void {
    console.log('Applying filter:', this.filter);
    this.loadContacts();
  }

  resetFilter(): void {
    console.log('Resetting filter');
    this.filter = {};
    this.dateRange1 = null;
    this.loadContacts();
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

}
