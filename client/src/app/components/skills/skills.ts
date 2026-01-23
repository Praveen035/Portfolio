// src/app/components/skills/skills.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  proficiency: number;
  icon?: string;
}

interface SkillCategory {
  category: string;
  icon: string;
  color: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss']
})
export class SkillsComponent implements OnInit {
  skillCategories: SkillCategory[] = [
    {
      category: 'Backend Development',
      icon: 'fas fa-server',
      color: '#667eea',
      skills: [
        { name: '.NET Core 6/7/8', proficiency: 95 },
        { name: 'ASP.NET Core Web API', proficiency: 95 },
        { name: 'C#', proficiency: 95 },
        { name: 'Entity Framework Core', proficiency: 90 },
        { name: 'Microservices Architecture', proficiency: 90 },
        { name: 'RESTful APIs', proficiency: 95 },
        { name: 'LINQ', proficiency: 90 },
        { name: 'Dependency Injection', proficiency: 90 }
      ]
    },
    {
      category: 'Frontend Development',
      icon: 'fas fa-laptop-code',
      color: '#f59e0b',
      skills: [
        { name: 'Angular 15+', proficiency: 92 },
        { name: 'TypeScript', proficiency: 90 },
        { name: 'RxJS', proficiency: 88 },
        { name: 'NgRx State Management', proficiency: 85 },
        { name: 'HTML5 & CSS3', proficiency: 90 },
        { name: 'Bootstrap 5', proficiency: 88 },
        { name: 'Responsive Design', proficiency: 90 },
        { name: 'Angular Material', proficiency: 85 }
      ]
    },
    {
      category: 'Cloud & DevOps',
      icon: 'fas fa-cloud',
      color: '#3b82f6',
      skills: [
        { name: 'Azure App Services', proficiency: 90 },
        { name: 'Azure Functions', proficiency: 85 },
        { name: 'Azure SQL Database', proficiency: 88 },
        { name: 'Azure DevOps', proficiency: 90 },
        { name: 'CI/CD Pipelines', proficiency: 92 },
        { name: 'Docker', proficiency: 80 },
        { name: 'Application Insights', proficiency: 85 },
        { name: 'Azure Blob Storage', proficiency: 85 }
      ]
    },
    {
      category: 'Databases',
      icon: 'fas fa-database',
      color: '#10b981',
      skills: [
        { name: 'SQL Server', proficiency: 92 },
        { name: 'Stored Procedures', proficiency: 90 },
        { name: 'MongoDB', proficiency: 75 },
        { name: 'Database Optimization', proficiency: 88 },
        { name: 'Query Performance Tuning', proficiency: 90 },
        { name: 'Database Design', proficiency: 88 }
      ]
    },
    {
      category: 'Testing & Quality',
      icon: 'fas fa-check-circle',
      color: '#8b5cf6',
      skills: [
        { name: 'Unit Testing (xUnit/NUnit)', proficiency: 90 },
        { name: 'Integration Testing', proficiency: 88 },
        { name: 'Moq Framework', proficiency: 85 },
        { name: 'Jasmine/Karma', proficiency: 80 },
        { name: 'Test-Driven Development', proficiency: 85 },
        { name: 'Swagger/OpenAPI', proficiency: 90 }
      ]
    },
    {
      category: 'Security & Authentication',
      icon: 'fas fa-shield-alt',
      color: '#ef4444',
      skills: [
        { name: 'OAuth 2.0', proficiency: 88 },
        { name: 'JWT', proficiency: 90 },
        { name: 'Role-Based Authorization', proficiency: 90 },
        { name: 'Identity Server', proficiency: 82 },
        { name: 'OWASP Standards', proficiency: 85 },
        { name: 'PCI-DSS Compliance', proficiency: 80 }
      ]
    }
  ];

  certifications = [
    {
      name: 'Microsoft Certified: Azure Developer Associate',
      code: 'AZ-204',
      icon: 'fab fa-microsoft',
      color: '#0078d4'
    },
    {
      name: 'Angular Fundamentals',
      provider: 'Pluralsight',
      icon: 'fas fa-graduation-cap',
      color: '#f05138'
    }
  ];

  achievements = [
    {
      icon: 'fas fa-rocket',
      value: '50%',
      label: 'Performance Improvement',
      description: 'Reduced API response times'
    },
    {
      icon: 'fas fa-users',
      value: '100K+',
      label: 'Active Users',
      description: 'Banking platform migration'
    },
    {
      icon: 'fas fa-code',
      value: '85%+',
      label: 'Code Coverage',
      description: 'Through comprehensive testing'
    },
    {
      icon: 'fas fa-clock',
      value: '99.9%',
      label: 'Uptime',
      description: 'Azure microservices deployment'
    }
  ];

  ngOnInit(): void {
    setTimeout(() => this.animateProgressBars(), 200);
  }

  animateProgressBars(): void {
    const progressBars = document.querySelectorAll('.progress-bar-fill');
    progressBars.forEach((bar) => {
      const width = bar.getAttribute('data-width');
      if (width) {
        (bar as HTMLElement).style.width = width + '%';
      }
    });
  }

  getProficiencyLevel(proficiency: number): string {
    if (proficiency >= 90) return 'Expert';
    if (proficiency >= 80) return 'Advanced';
    if (proficiency >= 70) return 'Proficient';
    return 'Intermediate';
  }

  getProficiencyColor(proficiency: number): string {
    if (proficiency >= 90) return '#10b981';
    if (proficiency >= 80) return '#3b82f6';
    if (proficiency >= 70) return '#f59e0b';
    return '#ef4444';
  }
}