import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.scss']
})
export class EditproductComponent implements OnInit {

  id:any;
  list={}
  
  constructor(private service: ApiService, private router: Router,  private route : ActivatedRoute) { }

  ngOnInit(): void {
 
    this.id = this.route.url
    this.id = this.id?.value[1].path;
    this.service.getSingleProduct(this.id).subscribe((res : any)=>{
      console.log(res);
      this.myForm.get('product')?.setValue(res.product)
      this.myForm.get('price')?.setValue(res.price)
      this.myForm.get('brand')?.setValue(res.brand)
      this.myForm.patchValue(this.list)

   
      
    })
   
  }
 
  myForm = new FormGroup({
    // id: new FormControl('', [Validators.required]),
   product: new FormControl('', [Validators.required]),
   price: new FormControl('', [Validators.required]),
   brand: new FormControl('', [Validators.required]),


  });

  storedData: any;
  
  handleSubmit(myForm: any) {
    console.log(myForm);
 
    this.service.editProductData(this.id,myForm.value).subscribe((dataRes: any) => {

      this.storedData = dataRes;
      console.log(this.storedData);

      alert("Updated added successfully!");
      this.displayData();

    });



    
    
  }
  displayData(){

    this.router.navigate(["displayproduct"]);

  }
 addProduct(){

    this.router.navigate(["addproductonly_gui"])

  }

}