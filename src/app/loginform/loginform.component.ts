import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from "@angular/forms"

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent {
  loginForm = new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email,Validators.minLength(5)]),
    password:new FormControl(null,[Validators.required,Validators.minLength(8),Validators.maxLength(16)])
  })
}
