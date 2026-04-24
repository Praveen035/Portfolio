import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import emailjs from '@emailjs/browser';
import { Portfolio, Skill, Contact } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiUrl = 'https://localhost:7001/api';

  private emailJsConfig = {
    serviceId: 'service_0qwaj4c',
    templateId: 'template_8sfcokd',
    publicKey: 'fRJ0qGl2vUR8xsN4J'
  };

  constructor(private http: HttpClient) { }

  // Portfolio Methods
  getPortfolios(): Observable<Portfolio[]> {
    return this.http.get<Portfolio[]>(`${this.apiUrl}/portfolio`);
  }

  getPortfolio(id: number): Observable<Portfolio> {
    return this.http.get<Portfolio>(`${this.apiUrl}/portfolio/${id}`);
  }

  createPortfolio(portfolio: Portfolio): Observable<Portfolio> {
    return this.http.post<Portfolio>(`${this.apiUrl}/portfolio`, portfolio);
  }

  updatePortfolio(id: number, portfolio: Portfolio): Observable<any> {
    return this.http.put(`${this.apiUrl}/portfolio/${id}`, portfolio);
  }

  deletePortfolio(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/portfolio/${id}`);
  }

  // Skills Methods
  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.apiUrl}/skills`);
  }

  // Contact Method - Now uses EmailJS instead of backend API
  sendContact(contact: Contact): Observable<any> {
    const templateParams = {
      from_name: contact.name,
      from_email: contact.email,
      subject: contact.subject,
      message: contact.message,
      current_date: new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        dateStyle: 'full',
        timeStyle: 'short'
      })
    };

    console.log('Sending email via EmailJS with params:', templateParams);

    // Convert EmailJS promise to Observable for consistency with your component
    return from(
      emailjs.send(
        this.emailJsConfig.serviceId,
        this.emailJsConfig.templateId,
        templateParams,
        this.emailJsConfig.publicKey
      )
    );
  }
}