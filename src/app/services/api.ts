import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface Contact {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ContactResponse {
  success: boolean;
  data: Contact[];
}

export interface ContactFilter {
  name?: string;
  email?: string;
  startDate?: string;
  endDate?: string;
}

export interface Job {
  _id: string;
  title: string;
  location: string;
  jobType: string;
  experience: string;
  openings: number;
  description: string;
  requiredSkills: string[];
  responsibilities: string[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface JobResponse {
  success: boolean;
  data: Job[];
}

export interface JobFilter {
  title?: string;
  location?: string;
  jobType?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getContacts(filter?: ContactFilter): Observable<ContactResponse> {
    return this.http.get<ContactResponse>(`${this.apiUrl}/contacts`).pipe(
      map((response: ContactResponse) => {
        if (!filter || (!filter.name && !filter.email)) {
          return response;
        }
        
        const filteredData = response.data.filter(contact => {
          const nameMatch = !filter.name || 
            `${contact.firstName} ${contact.lastName}`.toLowerCase().includes(filter.name.toLowerCase());
          const emailMatch = !filter.email || 
            contact.email.toLowerCase().includes(filter.email.toLowerCase());
          return nameMatch && emailMatch;
        });
        
        return { ...response, data: filteredData };
      })
    );
  }
}

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getJobs(filter?: JobFilter): Observable<JobResponse> {
    return this.http.get<JobResponse>(`${this.apiUrl}/jobs`).pipe(
      map((response: JobResponse) => {
        if (!filter || (!filter.title && !filter.location && !filter.jobType)) {
          return response;
        }
        
        const filteredData = response.data.filter(job => {
          const titleMatch = !filter.title || 
            job.title.toLowerCase().includes(filter.title.toLowerCase());
          const locationMatch = !filter.location || 
            job.location.toLowerCase().includes(filter.location.toLowerCase());
          const jobTypeMatch = !filter.jobType || 
            job.jobType.toLowerCase().includes(filter.jobType.toLowerCase());
          return titleMatch && locationMatch && jobTypeMatch;
        });
        
        return { ...response, data: filteredData };
      })
    );
  }

  getJobById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/jobs/${id}`);
  }

  createJob(job: Partial<Job>): Observable<any> {
    return this.http.post(`${this.apiUrl}/jobs/create`, job);
  }

  updateJob(id: string, job: Partial<Job>): Observable<any> {
    return this.http.put(`${this.apiUrl}/jobs/update/${id}`, job);
  }

  deleteJob(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/jobs/delete/${id}`);
  }
}
export interface Testimonial {
  _id: string;
  name: string;
  designation: string;
  message: string;
  rating: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface TestimonialResponse {
  success: boolean;
  data: Testimonial[];
}

export interface TestimonialFilter {
  name?: string;
  designation?: string;
  rating?: number;
}

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getTestimonials(filter?: TestimonialFilter): Observable<TestimonialResponse> {
    return this.http.get<TestimonialResponse>(`${this.apiUrl}/testimonials`).pipe(
      map((response: TestimonialResponse) => {
        if (!filter || (!filter.name && !filter.designation && !filter.rating)) {
          return response;
        }
        
        const filteredData = response.data.filter(testimonial => {
          const nameMatch = !filter.name || 
            testimonial.name.toLowerCase().includes(filter.name.toLowerCase());
          const designationMatch = !filter.designation || 
            testimonial.designation.toLowerCase().includes(filter.designation.toLowerCase());
          const ratingMatch = !filter.rating || testimonial.rating === filter.rating;
          return nameMatch && designationMatch && ratingMatch;
        });
        
        return { ...response, data: filteredData };
      })
    );
  }

  createTestimonial(testimonial: Partial<Testimonial>): Observable<any> {
    return this.http.post(`${this.apiUrl}/testimonials/create`, testimonial);
  }

  updateTestimonial(id: string, testimonial: Partial<Testimonial>): Observable<any> {
    return this.http.put(`${this.apiUrl}/testimonials/update/${id}`, testimonial);
  }

  deleteTestimonial(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/testimonials/delete/${id}`);
  }
}