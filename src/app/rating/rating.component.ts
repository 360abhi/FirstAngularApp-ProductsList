import { Component, Input } from '@angular/core';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {

  @Input('rating-value') rating = 0;
  @Input() numOfReviews = 0;

  onClick(ratingValue: number){
    this.rating = ratingValue;
  }

}
