import {Routes, RouterModule } from '@angular/router';
//import { ServiceComponent } from '.././service/service.component';
//import { AboutComponent } from '.././service/service.aboutcomponent';
import { LoginComponent } from './login/login.component';
import { AlertDashboardComponent } from './alert-dashboard/alert-dashboard.component';

// Route Configuration
export const routes: Routes = [
 // { path: 'service', component: ServiceComponent },
  //{ path: 'about', component: AboutComponent },

  { path: 'login', component: LoginComponent },
  { path: 'alerts', component: AlertDashboardComponent },
  { path: '',  component: AlertDashboardComponent},
  //{ path: '',  redirectTo: '/login', pathMatch: 'full'}
];