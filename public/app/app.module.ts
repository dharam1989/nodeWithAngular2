import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
// imported custom component
import { HeaderComponent } from '.././common/common.headerComponent';
import { FooterComponent } from '.././common/common.footerComponent';
import { routes } from './app.routes';
import { LoginComponent } from './login/login.component';
import { AlertDashboardComponent } from './alert-dashboard/alert-dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AlertDashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
