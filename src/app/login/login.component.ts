import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {LoginService} from "../services/login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  hasError: boolean = false;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.myForm();
  }


  myForm() {
    this.loginForm = this.formBuilder.group({
      email: '',
      password:  '',
    });
  }

  onSubmit() {
    this.loginService.login(this.loginForm.value)
      .subscribe({
        next:() =>{
          this.router.navigateByUrl('/profile'); //use id later for profile story

        },
        error: () =>{
          this.hasError = true;
        }
      });
  }
}
