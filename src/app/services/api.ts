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

export interface Blog {
  _id: string;
  title: string;
  slug: string;
  content: string;
  image: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface BlogResponse {
  success: boolean;
  data: Blog[];
}

export interface BlogFilter {
  title?: string;
  isPublished?: boolean;
}

export interface Service {
  _id: string;
  title: string;
  slug: string;
  card: {
    shortDescription: string;
    icon: string;
  };
  heroSection: {
    headline: string;
    subHeadline: string;
  };
  servicesOverview: {
    title: string;
    description: string;
    services: Array<{
      title: string;
      description: string;
      icon: string;
      _id?: string;
    }>;
  };
  processSection: {
    title: string;
    steps: Array<{
      step: number;
      title: string;
      icon: string;
      _id?: string;
    }>;
  };
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface ServiceResponse {
  success: boolean;
  data: Service[];
}

export interface ServiceFilter {
  title?: string;
  status?: string;
}

export interface Skill {
  _id: string;
  title: string;
  image: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface SkillResponse {
  success: boolean;
  data: Skill[];
}

export interface SkillFilter {
  title?: string;
  status?: boolean;
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

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getBlogs(filter?: BlogFilter): Observable<BlogResponse> {
    return this.http.get<BlogResponse>(`${this.apiUrl}/blogs`).pipe(
      map((response: BlogResponse) => {
        if (!filter || (!filter.title && filter.isPublished === undefined)) {
          return response;
        }
        
        const filteredData = response.data.filter(blog => {
          const titleMatch = !filter.title || 
            blog.title.toLowerCase().includes(filter.title.toLowerCase());
          const publishedMatch = filter.isPublished === undefined || blog.isPublished === filter.isPublished;
          return titleMatch && publishedMatch;
        });
        
        return { ...response, data: filteredData };
      })
    );
  }

  getBlogById(id: string): Observable<any> {
    // First try by ID, if that fails the component will try by slug
    return this.http.get(`${this.apiUrl}/blogs/id/${id}`);
  }

  getBlogBySlug(slug: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/blogs/${slug}`);
  }

  createBlog(blogData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/blogs/create`, blogData);
  }

  updateBlog(id: string, blogData: FormData): Observable<any> {
    return this.http.put(`${this.apiUrl}/blogs/update/${id}`, blogData);
  }

  deleteBlog(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/blogs/delete/${id}`);
  }

  generateSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getServices(filter?: ServiceFilter): Observable<ServiceResponse> {
    return this.http.get<ServiceResponse>(`${this.apiUrl}/services`).pipe(
      map((response: ServiceResponse) => {
        if (!filter || (!filter.title && !filter.status)) {
          return response;
        }
        
        const filteredData = response.data.filter(service => {
          const titleMatch = !filter.title || 
            service.title.toLowerCase().includes(filter.title.toLowerCase());
          const statusMatch = !filter.status || service.status === filter.status;
          return titleMatch && statusMatch;
        });
        
        return { ...response, data: filteredData };
      })
    );
  }

  getServiceById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/services/${id}`);
  }

  getServiceBySlug(slug: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/services/${slug}`);
  }

  createService(service: Partial<Service>): Observable<any> {
    return this.http.post(`${this.apiUrl}/services/create`, service);
  }

  createServiceWithFiles(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/services/create`, formData);
  }

  updateService(id: string, service: Partial<Service>): Observable<any> {
    return this.http.put(`${this.apiUrl}/services/update/${id}`, service);
  }

  updateServiceWithFiles(id: string, formData: FormData): Observable<any> {
    return this.http.put(`${this.apiUrl}/services/update/${id}`, formData);
  }

  deleteService(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/services/delete/${id}`);
  }

  generateSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }
}

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getSkills(filter?: SkillFilter): Observable<SkillResponse> {
    return this.http.get<SkillResponse>(`${this.apiUrl}/skills`).pipe(
      map((response: SkillResponse) => {
        if (!filter || (!filter.title && filter.status === undefined)) {
          return response;
        }
        
        const filteredData = response.data.filter(skill => {
          const titleMatch = !filter.title || 
            skill.title.toLowerCase().includes(filter.title.toLowerCase());
          const statusMatch = filter.status === undefined || skill.status === filter.status;
          return titleMatch && statusMatch;
        });
        
        return { ...response, data: filteredData };
      })
    );
  }

  getSkillById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/skills/${id}`);
  }

  createSkill(skillData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/skills/create`, skillData);
  }

  updateSkill(id: string, skillData: FormData): Observable<any> {
    return this.http.put(`${this.apiUrl}/skills/update/${id}`, skillData);
  }

  deleteSkill(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/skills/delete/${id}`);
  }
}