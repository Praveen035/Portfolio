import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Portfolio, Skill, Contact } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiUrl = 'https://localhost:7001/api'; // Update with your API URL

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

  // Contact Methods
  sendContact(contact: Contact): Observable<any> {
    return this.http.post(`${this.apiUrl}/contact`, contact);
  }
}