import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.formBuilder.group({
    email: '',
    displayName: '',
    password:  '',
    repeatPassword:''
  });


  constructor(private formBuilder:FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }


  onSubmit() {

  }
}
