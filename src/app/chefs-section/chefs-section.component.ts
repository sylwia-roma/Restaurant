import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';


@Component({
  selector: 'app-chefs-section',
  templateUrl: './chefs-section.component.html',
  styleUrls: ['./chefs-section.component.css']
})
export class ChefsSectionComponent implements OnInit {

  constructor(private config: ConfigService) { }

  ngOnInit() {
  }

  getChefs(){
    return this.config.getConfig().chefs;
  }

}
