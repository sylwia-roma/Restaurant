import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { MenuSectionComponent } from './menu-section/menu-section.component';
import { ReservationSectionComponent } from './reservation-section/reservation-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';


const Routes: Routes = [
  { path: '',   redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HeaderComponent },
  { path: 'About', component: AboutSectionComponent },
  { path: 'Menu', component: MenuSectionComponent },
  { path: 'Reserve', component: ReservationSectionComponent },
  { path: 'Contact', component: ContactSectionComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(Routes),

  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
