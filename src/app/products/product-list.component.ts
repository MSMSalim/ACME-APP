import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  public pageTitle: string = 'Product List';
  public imageWidth: number = 50;
  public imageMargin: number = 2;
  public showImage: boolean = false;

  public _listFilter: string;

  constructor() {
    this.filteredProducts = this.products;
    this.listFilter = 'cart';
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
  }

  public filteredProducts: IProduct[];

  public products: IProduct[] = [
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2019',
      description: '15 gallon capacity rolling garden',
      price: 32.99,
      starRating: 4.2,
      imageUrl: 'assets/images/garden_cart.png',
    },
    {
      productId: 5,
      productName: 'Hammer',
      productCode: 'TBX-0048',
      releaseDate: 'March 21, 2019',
      description: 'Curved claw steel hammer',
      price: 8.9,
      starRating: 4.8,
      imageUrl: 'assets/images/hammer.png',
    },
  ];

  performFilter(filterBy: string): IProduct[] {
    let filterByLowerCase = filterBy.toLocaleLowerCase();

    return this.products.filter((product: IProduct) => {
      return product.productName.toLocaleLowerCase().indexOf(filterByLowerCase) !== -1;
    });
  }

  ngOnInit(): void {
    console.log('component initialise');
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
