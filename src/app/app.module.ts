import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UpdatesComponent } from './updates/updates.component';
import { VirusscannersComponent } from './virusscanners/virusscanners.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';


const appRoutes: Routes = [
  {
    path: "home", 
    component: HomeComponent
  },
  {
    path: "updates", 
    component: UpdatesComponent
  },
  {
    path: "virusscanners", 
    component: VirusscannersComponent
  },
  {
    path: "blog",
    component: BlogComponent
  },
  {
    path: "*",
    redirectTo: "home"
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UpdatesComponent,
    VirusscannersComponent,
    NavComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
    ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
