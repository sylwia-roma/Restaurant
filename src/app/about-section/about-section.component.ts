import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';


@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent implements OnInit {

  constructor(private config: ConfigService) { };

  ngOnInit() {
  }

  getAbout() {
    return this.config.getConfig().chefs;
  }
}
