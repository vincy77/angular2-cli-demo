import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertModule } from 'ngx-bootstrap';
//import { ButtonsModule } from 'ng2-bootstrap';
//import { AccordionModule } from 'ngx-bootstrap';
// import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import {require} from "../test";

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', loadChildren: 'app/about/about.module#AboutModule'}
  // {path: 'about', loadChildren: () => new Promise((resolve => {
  //   (require as any).ensure([], (require: any) => {
  //     resolve(require('./about/about.module').AboutModule);
  //   })
  // }))}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //NgbModule.forRoot(),
    AlertModule.forRoot(),
    //ButtonsModule,
    // MaterialModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
