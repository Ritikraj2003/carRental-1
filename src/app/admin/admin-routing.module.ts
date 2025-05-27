import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarComponent } from './car/car.component';
import { BookingComponent } from './booking/booking.component';
import { DriverComponent } from './driver/driver.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'car', component: CarComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'driver', component: DriverComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
