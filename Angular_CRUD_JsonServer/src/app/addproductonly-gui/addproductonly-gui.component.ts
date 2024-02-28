import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-addproductonly-gui',
  templateUrl: './addproductonly-gui.component.html',
  styleUrls: ['./addproductonly-gui.component.scss']
})
export class AddproductonlyGuiComponent implements OnInit {

  constructor(private service: ApiService, private router: Router) { }

  ngOnInit(): void {
   
  }
 
  myForm = new FormGroup({
    id: new FormControl('', [Validators.required]),
   product: new FormControl('', [Validators.required]),
   price: new FormControl('', [Validators.required]),
   brand: new FormControl('', [Validators.required]),


  });

  storedData: any;
  
  handleSubmit(myForm: any) {
    console.log(myForm);

    this.service.postProduct(myForm.value).subscribe((dataRes: any) => {

      this.storedData = dataRes;
      console.log(this.storedData);

      alert("Product added successfully!");

    });
    
  }
  displayData(){

    this.router.navigate(["displayproduct"]);

  }
 addProduct(){

    this.router.navigate(["addproductonly_gui"])

  }

}