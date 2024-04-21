import { Component, OnInit, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {

  products: any[] = [];

  productsService = inject(ProductsService);

  ngOnInit(): void {
   this.productsService.getAll().subscribe((products) => {
      this.products = products;
   });
  }


}
