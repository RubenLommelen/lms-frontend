import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {LoginService} from "../services/login/login.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  hasError: boolean = false;
  infoMessage: string = '';

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.myForm();
    this.route.queryParams
      .subscribe(params => {
        if(params['registered'] !== undefined && params['registered'] === 'true') {
          this.infoMessage = `You have registered success(Switch)Fully`;
          setTimeout(()=>{
            //code goes here
            this.infoMessage = '';
          }, 5000);
        }
      });
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
          // this.router.navigateByUrl('/profile'); //use id later for profile story
          this.router.navigate(['profile'], {queryParams: { loggedIn: 'true' } }); //added this
        },
        error: () =>{
          this.hasError = true;
        }
      });
  }

  onRegister(){
    this.router.navigateByUrl('/register');
  }
}
