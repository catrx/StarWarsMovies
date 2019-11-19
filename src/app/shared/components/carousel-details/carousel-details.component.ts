import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel-details',
  templateUrl: './carousel-details.component.html',
  styleUrls: ['./carousel-details.component.scss']
})
export class CarouselDetailsComponent implements OnInit {

  @Input() title;
  @Input() openingCrawl;
  @Input() episodeId;
  @Input() director;
  @Input() dateSortie;
  @Input() characters;

  constructor() { }

  ngOnInit() {
  }

}
