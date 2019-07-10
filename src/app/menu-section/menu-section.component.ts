import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-menu-section',
  templateUrl: './menu-section.component.html',
  styleUrls: ['./menu-section.component.css']
})
export class MenuSectionComponent implements OnInit {

  constructor(private config: ConfigService) { }

  ngOnInit() {
  }

  getMenu() {
    return this.config.getConfig().menu;
  }

}
