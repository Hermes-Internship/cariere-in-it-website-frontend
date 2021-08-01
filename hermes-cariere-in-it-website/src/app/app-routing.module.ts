import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RegisterComponent } from './components/register/register.component';
import { ScheduleComponent } from './components/schedule/schedule.component';

const routes: Routes = [
  { path: '', component:MainPageComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
