// src/app/components/contact/contact.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioService } from '../../services/portfolio.service';
import { Contact } from '../../models/models';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent {
  contact: Contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitted = false;
  submitting = false;
  error = '';

  contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'praveenplus054@example.com',
      link: 'mailto:your.email@example.com'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      value: '+919008368091',
      link: 'tel:+919008368091'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: 'Bengaluru, India',
      link: null
    }
  ];

  socialLinks = [
    { icon: 'fab fa-github', url: 'https://github.com/Praveen035', label: 'GitHub' },
    { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/praveen-konaraddi-32b48b119/', label: 'LinkedIn' },
    { icon: 'fab fa-twitter', url: 'https://twitter.com', label: 'Twitter' },
    { icon: 'fab fa-instagram', url: 'https://instagram.com', label: 'Instagram' }
  ];

  constructor(private portfolioService: PortfolioService) { }

  onSubmit(): void {
    if (!this.isFormValid()) {
      return;
    }

    this.submitting = true;
    this.error = '';

    this.portfolioService.sendContact(this.contact).subscribe({
      next: () => {
        this.submitted = true;
        this.submitting = false;
        this.resetForm();

        // Hide success message after 5 seconds
        setTimeout(() => {
          this.submitted = false;
        }, 5000);
      },
      error: (err) => {
        this.error = 'Failed to send message. Please try again.';
        this.submitting = false;
        console.error(err);
      }
    });
  }

  isFormValid(): boolean {
    return !!(
      this.contact.name?.trim() &&
      this.contact.email?.trim() &&
      this.contact.subject?.trim() &&
      this.contact.message?.trim()
    );
  }

  resetForm(): void {
    this.contact = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}