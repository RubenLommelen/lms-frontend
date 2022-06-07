import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // public oneFieldIsEmpty: boolean = false;

  registerForm!: FormGroup;


  constructor(private formBuilder:FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: new FormControl('', [Validators.email, Validators.required]),
      displayName: new FormControl ('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@$%^&(){}:;<>,.?/~_+=|])[A-Za-z0-9!@$%^&(){}:;<>,.?/~_+-=|].{7,}$')]),
      repeatPassword: new FormControl('', [Validators.required])
    });
  }


  onSubmit() {
    // this.checkForEmptyFields();
    if (this.registerForm.valid) {

    } else {

    }
  }

  // checkForEmptyFields() {
  //   this.oneFieldIsEmpty = this.displayName!.errors?.['required'] || this.email!.errors?.['required'] || this.password!.errors?.['password'] || this.repeatPassword!.errors?.['repeatPassword'];
  //   console.log('displayName' + this.displayName!.errors?.['required']);
  //   console.log('email' + this.email!.errors?.['required']);
  //   console.log('password' + this.password!.errors?.['required']);
  //   console.log('repeat' + this.repeatPassword!.errors?.['required']);
  // }

  get email() { return this.registerForm.get('email'); }
  get displayName() { return this.registerForm.get('displayName'); }
  get password() { return this.registerForm.get('password'); }
  get repeatPassword() { return this.registerForm.get('repeatPassword'); }
}
