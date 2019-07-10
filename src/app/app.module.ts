import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LearnMoreSectionComponent } from './learn-more-section/learn-more-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ChefsSectionComponent } from './chefs-section/chefs-section.component';
import { MenuSectionComponent } from './menu-section/menu-section.component';
import { OtherServicesSectionComponent } from './other-services-section/other-services-section.component';
import { ReservationSectionComponent } from './reservation-section/reservation-section.component';
import { ReviewsSectionComponent } from './reviews-section/reviews-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { ConfigService } from './config.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LearnMoreSectionComponent,
    AboutSectionComponent,
    ChefsSectionComponent,
    MenuSectionComponent,
    OtherServicesSectionComponent,
    ReservationSectionComponent,
    ReviewsSectionComponent,
    ContactSectionComponent,
    FooterComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
