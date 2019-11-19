import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CarouselDetailsComponent} from '../carousel-details/carousel-details.component';
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() title;
  @Input() director;
  @Input() dateSortie;
  @Input() openingCrawl;
  @Input() episodeId;
  @Input() characters;

  closeResult: string;

  constructor(private modalService: NgbModal) { }

  open() {
    const modalRef = this.modalService.open(CarouselDetailsComponent);
    modalRef.componentInstance.title = this.title;
    modalRef.componentInstance.director = this.director;
    modalRef.componentInstance.openingCrawl = this.openingCrawl;
    modalRef.componentInstance.dateSortie = this.dateSortie;
    modalRef.componentInstance.episodeId = this.episodeId;
    modalRef.componentInstance.characters = this.characters;
  }

  ngOnInit() {
  }

}
