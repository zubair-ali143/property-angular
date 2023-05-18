import { Component } from '@angular/core';
import { FormBuilder,FormGroup,FormControl } from '@angular/forms';
import { PropertiesService } from '../shared/properties.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {


  constructor(private fb:FormBuilder, private signupAPI:PropertiesService, private router:Router){}

  signupForm = new FormGroup({
    name: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  })

  signUpfunction(){
    this.signupAPI.signuppostMethod(this.signupForm.value).subscribe((res) => {
      this.router.navigate(['login']);
      this.signupForm.reset();
    });
  }
}



