import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from '../product/product-detail.guard';
import { SharedModule } from '../shared/shared.module';

let productRoutes = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', canActivate:[ProductDetailGuard], component: ProductDetailComponent },
];

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    RouterModule.forChild(productRoutes),
    SharedModule
  ],
})
export class ProductModule {}
