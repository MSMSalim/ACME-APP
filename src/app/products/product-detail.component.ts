import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  public pageTitle: string = 'Product Detail';
  public product: IProduct;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    console.log(this.route.snapshot.paramMap.get('id'));

    this.pageTitle += `: ${id}`;

    this.product = {
      productId: id,
      productName: 'Leaf Rake',
      productCode: 'GDN-0011',
      releaseDate: 'March 19, 2019',
      description: 'Leaf rake with 48-inch wooden handle.',
      price: 19.95,
      starRating: 3.2,
      imageUrl: 'assets/images/leaf_rake.png',
    };
  }

  onBack(): void {
    console.log('navigating back....');
    this.router.navigate(['/products']);
  }
}
