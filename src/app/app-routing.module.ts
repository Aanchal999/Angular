import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
  {path: 'home',component:HomeComponent},
  {path: 'about',component:AboutComponent},
  {path: 'services',component:ServicesComponent},
  {path: 'contact',component:ContactComponent},
  { path: '**',redirectTo: 'services'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, AboutComponent, ServicesComponent,ContactComponent]
