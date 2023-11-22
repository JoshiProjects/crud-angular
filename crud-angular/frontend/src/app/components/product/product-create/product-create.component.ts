import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent implements OnInit {
  
  product: Product= {
    name: '',
    price: undefined
  }

  constructor(private productService: ProductService, private router: Router){ }

  ngOnInit(): void{
    
  }
  
  
  CreateProduto(): void{
    this.productService.create(this.product).subscribe(()=>{this.productService.showOnConsole("Produto criado com sucesso")
      this.router.navigate(['/products'])})
    
  }
  

  Cancel(): void{
   this.router.navigate(['/products'])
  }

}
