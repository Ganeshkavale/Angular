import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';


export interface Product {
  id: string;
  product: string;
  price: string;
  brand: string;
}



@Component({
  selector: 'app-displayproduct',
  templateUrl: './displayproduct.component.html',
  styleUrls: ['./displayproduct.component.scss']
})
export class DisplayproductComponent implements OnInit {



  ngOnInit(): void {
  }

  displayedColumns: string[] = [
    "id",
    "product",
    "price",
    "brand",
    "edit",
    "delete",
  ];


  // displayedColumns: string[] = ['id', 'userId', 'title', 'completed'];
  
  dataSource!:MatTableDataSource<Product>;

  posts:any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private service: ApiService, private router: Router){
    this.displayProductTable();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  displayProductTable(){


    this.service.getAllData().subscribe(data => {
      console.log(data);
      this.posts=data;

      this.dataSource= new MatTableDataSource(this.posts);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;


    });
  }

  deleteProductData(id:any){
    this.service.deleteProduct(id).subscribe((res:any)=>{
      console.log(res);
      this.displayProductTable();
    })
  }


  editProductData(id:any){
    this.router.navigate(["editProductById/"+id]);
  }
  logoutButton(){
    this.router.navigate([""]);
    localStorage.clear();
  }
  addProduct(){

    this.router.navigate(["addproductonly_gui"])

  }
  
}




