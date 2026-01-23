import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Expertise {
  icon: string;
  title: string;
  description: string;
  color: string;
}

interface Company {
  name: string;
  role: string;
  duration: string;
  location: string;
  logo?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})

export class HomeComponent implements OnInit {
  name = 'Praveen Konaraddi';
  title = 'Senior .NET Full Stack Developer';
  tagline = 'Architecting Enterprise Solutions with .NET Core & Angular';

  location = 'Bangalore, Karnataka, India';
  email = 'praveenplus054@gmail.com';
  phone = '+91 9008368091';
  linkedin = 'linkedin.com/in/praveen-konaraddi-32b48b119/';
  yearsOfExperience = '5+';

  summary = [
    'Results-driven Senior Full Stack Developer with 5+ years of expertise architecting and delivering enterprise-grade applications using .NET Core, Angular, and Azure cloud services.',
    'Specialized in modernizing legacy banking systems into scalable microservices architectures serving 100K+ users.',
    'Proven track record of improving system performance by 50%+ through strategic optimization and cloud-native implementations.',
    'Strong advocate for clean code, SOLID principles, and test-driven development practices.'
  ];

  stats = [
    { icon: 'fas fa-briefcase', value: '5+', label: 'Years Experience', color: '#667eea' },
    { icon: 'fas fa-users', value: '100K+', label: 'Active Users Served', color: '#f59e0b' },
    { icon: 'fas fa-project-diagram', value: '40+', label: 'Projects Delivered', color: '#10b981' },
    { icon: 'fas fa-award', value: '2', label: 'Certifications', color: '#ef4444' }
  ];

  expertise: Expertise[] = [
    {
      icon: 'fas fa-server',
      title: 'Backend Development',
      description: 'Expert in .NET Core 6/7/8, ASP.NET Core Web API, C#, Entity Framework Core, and microservices architecture. Built 15+ high-performance RESTful APIs for core banking operations.',
      color: '#667eea'
    },
    {
      icon: 'fas fa-laptop-code',
      title: 'Frontend Development',
      description: 'Advanced proficiency in Angular 15+, TypeScript, RxJS, NgRx state management, and responsive design. Created enterprise applications serving thousands of concurrent users.',
      color: '#f59e0b'
    },
    {
      icon: 'fas fa-cloud',
      title: 'Cloud & DevOps',
      description: 'Specialized in Azure App Services, Azure Functions, Azure DevOps CI/CD pipelines, and Docker. Achieved 99.9% uptime with automated deployments and monitoring.',
      color: '#3b82f6'
    },
    {
      icon: 'fas fa-database',
      title: 'Database Design',
      description: 'Proficient in SQL Server, MongoDB, database optimization, and query performance tuning. Designed databases with 50+ tables and complex stored procedures.',
      color: '#10b981'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Security & Authentication',
      description: 'Implemented OAuth 2.0, JWT, role-based authorization ensuring PCI-DSS compliance. Expert in secure coding practices and OWASP standards.',
      color: '#ef4444'
    },
    {
      icon: 'fas fa-vial',
      title: 'Testing & Quality',
      description: 'Achieved 85%+ code coverage through comprehensive unit and integration testing using xUnit, NUnit, and Moq. Strong advocate for test-driven development.',
      color: '#8b5cf6'
    }
  ];

  companies: Company[] = [
    {
      name: 'SLK Software',
      role: 'Senior Software Engineer',
      duration: 'July 2023 - Present',
      location: 'Client: Fifth Third Bank, USA'
    },
    {
      name: 'Capgemini',
      role: 'Associate Consultant',
      duration: 'Dec 2021 - June 2023',
      location: 'Client: Water Corporation, USA'
    },
    {
      name: 'CABCS Groups',
      role: 'Software Engineer',
      duration: 'Feb 2019 - Dec 2021',
      location: 'Client: Fujitsu, Japan'
    }
  ];

  highlights = [
    {
      icon: 'fas fa-rocket',
      title: 'Banking Platform Migration',
      description: 'Spearheaded migration of enterprise online banking platform from legacy .NET Framework to .NET Core 7 microservices with Angular 17, serving 100K+ active users with zero downtime.'
    },
    {
      icon: 'fas fa-tachometer-alt',
      title: 'Performance Optimization',
      description: 'Achieved 50% reduction in API response times (800ms to 400ms) through caching strategies and async/await patterns, significantly improving user experience.'
    },
    {
      icon: 'fas fa-cogs',
      title: 'CI/CD Automation',
      description: 'Designed and deployed fully automated CI/CD pipelines in Azure DevOps, reducing release cycles from weekly to daily with blue-green deployments.'
    }
  ];

  technologies = [
    '.NET Core', 'Angular', 'Azure', 'SQL Server', 'TypeScript', 'C#',
    'Docker', 'Microservices', 'REST API', 'Entity Framework', 'RxJS', 'NgRx'
  ];

  showFullSummary = false;

  ngOnInit(): void {
    this.animateElements();
  }

  animateElements(): void {
    setTimeout(() => {
      const elements = document.querySelectorAll('.animate-on-load');
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('animated');
        }, index * 100);
      });
    }, 100);
  }

  toggleSummary(): void {
    this.showFullSummary = !this.showFullSummary;
  }

  downloadResume(): void {
    console.log('Download resume');
  }
}