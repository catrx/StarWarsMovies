import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  @Input() title;
  @Input() openingCrawl;
  @Input() episodeId;
  @Input() director;
  @Input() dateSortie;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

}
