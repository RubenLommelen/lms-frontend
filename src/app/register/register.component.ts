import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    displayName: ['', [Validators.required]],
    password:  ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@$%^&(){}:;<>,.?/~_+=|])[A-Za-z0-9!@$%^&(){}:;<>,.?/~_+-=|].{7,}$')]],
    repeatPassword: ['', [Validators.required]]
  });


  constructor(private formBuilder:FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }


  onSubmit() {

  }
}
