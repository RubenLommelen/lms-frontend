import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ConfirmedValidator} from "../validators/confirmed.validator";
import {RegisterService} from "../services/register/register.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  registerForm!: FormGroup;
  registerSubscription!: Subscription;
  emailUnique: boolean = true;

  constructor(private formBuilder: FormBuilder, private registerService: RegisterService, private router: Router) {
  }


  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
        email: new FormControl('', [Validators.email, Validators.required]),
        displayName: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@$%^&(){}:;<>,.?/~_+=|])[A-Za-z0-9!@$%^&(){}:;<>,.?/~_+-=|].{7,}$')]),
        repeatPassword: new FormControl('', [Validators.required]),
      },
      {validator: ConfirmedValidator('password', 'repeatPassword')}
    );
  }

  ngOnDestroy(): void {
    this.registerSubscription.unsubscribe()
  }


  onSubmit() {
    this.emailUnique = true;
    if (this.registerForm.valid && this.emailUnique) {
      this.registerSubscription = this.registerService.registerStudent(this.registerForm.value).subscribe(
        e => {
          this.emailUnique = e.emailUnique;
          if (this.emailUnique) {
            this.router.navigate(['login'], {queryParams: { registered: 'true' } }); //added this
          }
        }
      );
    }
  }


  get email() {
    return this.registerForm.get('email');
  }

  get displayName() {
    return this.registerForm.get('displayName');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get repeatPassword() {
    return this.registerForm.get('repeatPassword');
  }

}
