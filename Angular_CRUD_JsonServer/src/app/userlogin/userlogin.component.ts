import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})
export class UserloginComponent implements OnInit {

  constructor(private service: ApiService, private router: Router) { }

  ngOnInit(): void {
   
  }
  emailPattern = "^[a-z0-9+_.-]+@[a-z0-9.-]+[a-z]+$";
  passPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/;
  myForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
    password: new FormControl('', [Validators.required, Validators.pattern(this.passPattern)]),


  });

  user1 = "user";

  storedData: any;
  
  handleSubmit(myForm: any) {
    console.log(myForm);

    this.service.getData().subscribe((dataRes: any) => {

      this.storedData = dataRes;
      console.log(this.storedData)

      for (var i = 0; i < this.storedData.length; i++) {

        if (this.storedData[i].email === this.myForm.value.email && this.storedData[i].password === this.myForm.value.password) {

          console.log(this.storedData[i].role);
          // localStorage.setItem("role", this.storedData[i].role)
          if (this.storedData[i].role === "admin") {

            alert("Welcome Admin(Name Here)!");
            console.log("Admin has logged in!")
            this.router.navigate(["addproduct"])
            break;
      
         
          } else if (this.storedData[i].role === "user") {

            alert("Welcome user(Name Here)!");
            console.log("user has logged in!")
            this.router.navigate(["displayProductToUser"])
            break;

          }else{
            alert("No role is defined!!");            
          }


        }else{
          if(i===this.storedData.length-1)
          alert("Please do registration!");        
        }
        

      }
    });
    // var role = localStorage.getItem("role");
    // if (role == 'admin') {
    //   this.router.navigate(["home"])

    //   console.log("It is working!")
    // }
  }

}
