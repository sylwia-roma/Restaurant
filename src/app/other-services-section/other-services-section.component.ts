import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-other-services-section',
  templateUrl: './other-services-section.component.html',
  styleUrls: ['./other-services-section.component.css']
})
export class OtherServicesSectionComponent implements OnInit {

  constructor(private config: ConfigService) { }

  ngOnInit() {
  }

  getOtherServices(){
    return this.config.getConfig().other_services;
  }

}
