import { Component, OnInit } from '@angular/core';
import {LoginService} from "../services/login/login.service";

@Component({
  selector: 'app-login-succes',
  templateUrl: './login-succes.component.html',
  styleUrls: ['./login-succes.component.css']
})
export class LoginSuccesComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.getName();
  }



}
