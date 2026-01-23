// src/app/components/portfolio/portfolio.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  company: string;
  client: string;
  description: string;
  shortDescription: string;
  image: string;
  technologies: string[];
  category: string;
  duration: string;
  achievements: string[];
  links?: {
    live?: string;
    github?: string;
    demo?: string;
  };
  featured: boolean;
  stats?: {
    users?: string;
    performance?: string;
    coverage?: string;
  };
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.scss']
})
export class PortfolioComponent implements OnInit {
  projects: Project[] = [
    {
      id: 1,
      title: 'Enterprise Banking Platform Migration',
      company: 'SLK Software',
      client: 'Fifth Third Bank, USA',
      shortDescription: 'Spearheaded migration of enterprise online banking platform from legacy .NET Framework to .NET Core 7 microservices',
      description: 'Led the complete modernization of a legacy banking platform, successfully migrating 25+ APIs to .NET Core 7 microservices architecture with Angular 17 frontend. The platform now serves 100K+ active users with zero downtime during migration.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      technologies: ['.NET Core 7', 'Angular 17', 'Microservices', 'Azure', 'SQL Server', 'JWT', 'Azure DevOps'],
      category: 'Enterprise',
      duration: 'July 2023 - Present',
      featured: true,
      stats: {
        users: '100K+',
        performance: '50%',
        coverage: '85%'
      },
      achievements: [
        'Migrated 25+ APIs with zero downtime',
        'Improved performance by 50% (800ms to 400ms)',
        'Achieved 85%+ code coverage',
        'Implemented PCI-DSS compliant security',
        'Reduced release cycles from weekly to daily'
      ]
    },
    {
      id: 2,
      title: 'EA Manager - Customer Support Portal',
      company: 'SLK Software',
      client: 'Fifth Third Bank, USA',
      shortDescription: 'Comprehensive customer support application enabling real-time user emulation and account troubleshooting',
      description: 'Built a comprehensive support application that enables customer service representatives to emulate user accounts in real-time, troubleshoot issues, and perform administrative operations. Reduced support resolution time by 35%.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      technologies: ['.NET Core 7', 'Angular 17', 'Entity Framework Core', 'SQL Server', 'RBAC', 'Azure'],
      category: 'Enterprise',
      duration: '2023 - 2024',
      featured: true,
      achievements: [
        'Reduced support resolution time by 35%',
        'Real-time user account emulation',
        'Role-based access control (RBAC)',
        'Comprehensive audit logging',
        'Integration with core banking APIs'
      ]
    },
    {
      id: 3,
      title: 'Core Banking Microservices Suite',
      company: 'SLK Software',
      client: 'Fifth Third Bank, USA',
      shortDescription: 'Architected 15+ high-performance RESTful microservices for core banking operations',
      description: 'Designed and developed a comprehensive suite of microservices handling Account Management, Payments, and Transfers. Implemented Repository and Unit of Work patterns for improved maintainability and scalability.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
      technologies: ['.NET Core 7', 'Entity Framework Core', 'SQL Server', 'Repository Pattern', 'Unit of Work', 'Swagger'],
      category: 'Backend',
      duration: '2023 - 2024',
      featured: true,
      achievements: [
        'Built 15+ RESTful microservices',
        'Improved maintainability by 40%',
        'Implemented comprehensive API documentation',
        'Async/await patterns for performance',
        'Automated testing with xUnit and Moq'
      ]
    },
    {
      id: 4,
      title: 'Workflow Builder Application',
      company: 'Capgemini',
      client: 'Water Corporation, USA',
      shortDescription: 'Enterprise workflow management system with drag-and-drop UI for business process automation',
      description: 'Developed an enterprise-grade Workflow Builder enabling business users to create and manage complex approval workflows from predefined templates. Features intuitive drag-and-drop interface with Angular Material.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
      technologies: ['Angular 13', 'ASP.NET Core 5', 'NgRx', 'Angular Material', 'OAuth 2.0', 'Entity Framework'],
      category: 'Frontend',
      duration: 'Dec 2021 - June 2023',
      featured: true,
      achievements: [
        'Improved user productivity by 45%',
        'Reduced custom development requests by 50%',
        'Support for 5,000+ concurrent users',
        'Flexible page variation system with 10+ page types',
        'OAuth 2.0 enterprise SSO integration'
      ]
    },
    {
      id: 5,
      title: 'Chemical Substance Management System (CSMS)',
      company: 'CABCS Groups',
      client: 'Fujitsu, Japan',
      shortDescription: 'Comprehensive solution for chemical manufacturing companies to manage substance guidelines and inventory',
      description: 'Built a comprehensive web-based system for chemical manufacturing companies to manage substance guidelines, inventory tracking, and customer distribution compliance. Features responsive design for field operations.',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800',
      technologies: ['ASP.NET MVC Core', 'SQL Server', 'Bootstrap 4', 'jQuery', 'Azure Blob Storage', 'RESTful API'],
      category: 'Full Stack',
      duration: 'Feb 2019 - Dec 2021',
      featured: false,
      achievements: [
        'Reduced data entry errors by 35%',
        'Handled 10,000+ daily transactions',
        'Managed 50GB+ of safety datasheets',
        'Database with 50+ optimized tables',
        'Mobile-friendly interface for field operations'
      ]
    },
    {
      id: 6,
      title: 'CI/CD Pipeline Automation',
      company: 'SLK Software',
      client: 'Fifth Third Bank, USA',
      shortDescription: 'Fully automated deployment pipeline with blue-green deployments and automated testing',
      description: 'Designed and deployed comprehensive CI/CD pipelines in Azure DevOps implementing automated testing, code quality gates, and blue-green deployments for zero-downtime releases.',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800',
      technologies: ['Azure DevOps', 'Docker', 'Azure App Services', 'Git', 'Application Insights', 'Automated Testing'],
      category: 'DevOps',
      duration: '2023 - 2024',
      featured: false,
      achievements: [
        'Reduced release cycles from weekly to daily',
        'Achieved 99.9% uptime',
        'Automated testing and quality gates',
        'Blue-green deployment strategy',
        'Proactive monitoring with Application Insights'
      ]
    }
  ];

  filteredProjects: Project[] = [];
  selectedCategory = 'All';
  categories: string[] = [];
  loading = false;

  ngOnInit(): void {
    this.extractCategories();
    this.filterProjects('All');
  }

  extractCategories(): void {
    const categorySet = new Set(this.projects.map(p => p.category));
    this.categories = ['All', ...Array.from(categorySet)];
  }

  filterProjects(category: string): void {
    this.selectedCategory = category;
    this.loading = true;

    setTimeout(() => {
      if (category === 'All') {
        this.filteredProjects = this.projects;
      } else {
        this.filteredProjects = this.projects.filter(p => p.category === category);
      }
      this.loading = false;
    }, 300);
  }

  getFeaturedProjects(): Project[] {
    return this.projects.filter(p => p.featured);
  }

  getCategoryIcon(category: string): string {
    const icons: { [key: string]: string } = {
      'Enterprise': 'fas fa-building',
      'Backend': 'fas fa-server',
      'Frontend': 'fas fa-laptop-code',
      'Full Stack': 'fas fa-layer-group',
      'DevOps': 'fas fa-cogs',
      'All': 'fas fa-th'
    };
    return icons[category] || 'fas fa-folder';
  }

  getCategoryColor(category: string): string {
    const colors: { [key: string]: string } = {
      'Enterprise': '#667eea',
      'Backend': '#10b981',
      'Frontend': '#f59e0b',
      'Full Stack': '#ef4444',
      'DevOps': '#8b5cf6',
      'All': '#3b82f6'
    };
    return colors[category] || '#6b7280';
  }
}