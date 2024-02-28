import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = "http://localhost:3000/users";
  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get(this.baseUrl);
  }

  baseProductAllUrl = "http://localhost:3000/products";

  getAllData(){
    return this.http.get(this.baseProductAllUrl);
  }



  // ----------------------------------------------------------------

  baseProductUrl = "http://localhost:3000/products";

  postProduct(products : any){
    return this.http.post(this.baseProductUrl,products);
  }

// ------------------------------------------------------------------------

baseProductDeleteUrl = "http://localhost:3000/products";
  deleteProduct(id:any){
   return this.http.delete(`${this.baseProductDeleteUrl}/${id}`);
  }

// -----------------------------------------------


baseProductAllUrlEdit = "http://localhost:3000/products/";

baseProductAllUrlEdit1 = "http://localhost:3000/products/";
editProductData(id:any, myForm : any){

  return this.http.put(this.baseProductAllUrlEdit1+"/"+id,myForm);


}


getSingleProduct(id: any){
  return this.http.get(`${this.baseProductDeleteUrl}/${id}`);
}



}
