// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { PortfolioComponent } from './components/portfolio/portfolio';
import { SkillsComponent } from './components/skills/skills';
import { ContactComponent } from './components/contact/contact';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Home - Praveen Konaraddi' },
    { path: 'portfolio', component: PortfolioComponent, title: 'Portfolio - Praveen Konaraddi' },
    { path: 'skills', component: SkillsComponent, title: 'Skills - Praveen Konaraddi' },
    { path: 'contact', component: ContactComponent, title: 'Contact - Praveen Konaraddi' },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];