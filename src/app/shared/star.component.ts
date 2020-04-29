import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['star.component.css'],
})
export class StarComponent implements OnChanges {
  @Input() public rating: number;
  public starWidth: number;

  ngOnChanges(): void {
    this.starWidth = (this.rating * 75) / 5;

    console.log('changing', this.starWidth);
  }
}
