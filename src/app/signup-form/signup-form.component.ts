import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
  providers:[AuthService]
})
export class SignupFormComponent  {


    email:string;
    password :string;
    displayName:string;
    errorMsg :string;




  constructor(private authService:AuthService,private router:Router) { }



signUp(){
console.log("sign up done");
const email =this.email;
const password =this.password;
const displayName =this.displayName;
this.authService.signUp(email,password,displayName).then((resolve)=>this.router.navigate(['chat']))
.catch(err=>this.errorMsg=err.message);




}



}
