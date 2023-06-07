import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
  
  registerForm!:FormGroup;

  constructor(private formBuilder:FormBuilder){}

  ngOnInit(): void {
      this.registerForm = this.formBuilder.group({
        fullname:["",[Validators.required,Validators.minLength(5),Validators.maxLength(30)]],
        age:["",[Validators.required]],
        email:["",[Validators.required,Validators.email]],
        password:["",[Validators.required,Validators.minLength(8),Validators.maxLength(16)]],
        confirmpassword:["",[Validators.required,Validators.minLength(8),Validators.maxLength(16)]],
        department:["",[Validators.required,Validators.minLength(5),Validators.maxLength(25)]],
        salary:["",[Validators.required]]
      },{
        validators: this.matchingPasswords('password', 'confirmpassword')
      });
  }


  matchingPasswords(Password: string, ConfirmPassword: string) {
    return (controls: AbstractControl) => {
      if (controls) {
         Password = controls.get('password')!.value;
         ConfirmPassword = controls.get('confirmpassword')!.value;
        //console.log ("check what is passed to the validator", password, confirmPassword);
        if (Password !== ConfirmPassword) {
          //this is an error set for a specific control which you can use in a mat-error
          controls.get('confirmpassword')?.setErrors({ not_the_same: true });
          //this is the returned error for the form normally used to disable a submit button
          return { mismatchedPassword: true }
        }
      }
      return null;
    }
  }


}
