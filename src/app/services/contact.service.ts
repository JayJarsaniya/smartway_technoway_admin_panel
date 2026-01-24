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