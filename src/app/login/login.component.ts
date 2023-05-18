import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PropertiesService } from '../shared/properties.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb:FormBuilder, private router:Router, private loginApi:PropertiesService){}

  loginform= new FormGroup({
    email:new FormControl(''),
    password:new FormControl(''),
  })

  loginFunction(){
    this.loginApi.signupgetMethod().subscribe((res)=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginform.value.email && a.password === this.loginform.value.password
      });
      if(user){
        this.router.navigate(['properties'])
        this.loginform.reset()
        alert('login successfully')
      }else{
        alert('Login faild')
      }
    });
  }
}
