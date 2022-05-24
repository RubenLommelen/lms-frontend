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






  constructor(private fb: FormBuilder, private loginService: LoginService, private _router: Router) { }

  ngOnInit(): void {
    this.myForm();
  }


  myForm() {
    this.loginForm = this.fb.group({
      email: '',
      password:  '',
    });
  }

  onSubmit() {
    this.loginService.login(this.loginForm.value)
      .subscribe({
        next:() =>{
          this._router.navigateByUrl('/profile/'+this.loginService.getUsername());
        },
        error: (error) =>{
          console.log(error);
          this.hasError = true;
        }
      });
  }
}
