// src/app/components/navbar/navbar.component.ts
import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface NavLink {
  path: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;
  isScrolled = false;

  name = 'Praveen Konaraddi';
  initials = 'PK';

  navLinks: NavLink[] = [
    { path: '/', label: 'Home', icon: 'fas fa-home' },
    { path: '/portfolio', label: 'Portfolio', icon: 'fas fa-briefcase' },
    { path: '/skills', label: 'Skills', icon: 'fas fa-code' },
    { path: '/contact', label: 'Contact', icon: 'fas fa-envelope' }
  ];

  socialLinks = [
    {
      url: 'https://linkedin.com/in/praveen-konaraddi-32b48b119/',
      icon: 'fab fa-linkedin-in',
      label: 'LinkedIn',
      color: '#0077b5'
    },
    {
      url: 'https://github.com/Praveen035',
      icon: 'fab fa-github',
      label: 'GitHub',
      color: '#333'
    },
    {
      url: 'mailto:praveenplus054@gmail.com',
      icon: 'fas fa-envelope',
      label: 'Email',
      color: '#ea4335'
    }
  ];

  ngOnInit(): void {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkScroll();
  }

  checkScroll(): void {
    this.isScrolled = window.pageYOffset > 50;
  }

  toggleNavbar(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  closeNavbar(): void {
    this.isCollapsed = true;
  }

  downloadResume(): void {
    // Implement resume download
    console.log('Downloading resume...');
    // window.open('assets/resume.pdf', '_blank');
  }
}