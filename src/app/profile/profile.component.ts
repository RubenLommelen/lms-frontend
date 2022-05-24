import { Component, OnInit } from '@angular/core';
import {LoginService} from "../services/login/login.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public   username!: any;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.username = this.getUsername();
  }


  getUsername(){
    return  this.loginService.getUsername();
  }
}
