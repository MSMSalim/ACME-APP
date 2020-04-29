import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['star.component.css'],
})
export class StarComponent implements OnChanges {
  @Input() public rating: number;
  @Output() public ratingClicked: EventEmitter<string> =
   new EventEmitter<string>();

  public starWidth: number;

  ngOnChanges(): void {
    this.starWidth = (this.rating * 75) / 5;

    console.log('changing', this.starWidth);
  }

  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
  }
}
