import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-reviews-section',
  templateUrl: './reviews-section.component.html',
  styleUrls: ['./reviews-section.component.css']
})
export class ReviewsSectionComponent implements OnInit {

  constructor(private config: ConfigService) { };

  ngOnInit() {

  }

  getReviews() {
    return this.config.getConfig().reviews;
  }

}
