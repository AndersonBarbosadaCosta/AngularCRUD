import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigatetoProductCreate(): void {
   this.router.navigate(["/products/create"])
  }

  
}
