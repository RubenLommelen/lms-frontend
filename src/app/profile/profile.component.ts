import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoginService} from "../services/login/login.service";
import {StudentService} from "../services/student/student.service";
import {Subscription} from "rxjs";
import {Student} from "../models/Student";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  public username!: any;
  subscription!: Subscription;
  student!: Student;
  message: boolean = true;
  infoMessage = '';



  constructor(private loginService: LoginService, private studentService: StudentService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.username = this.getUsername();
    this.getStudent();
    // added this
    this.route.queryParams
      .subscribe(params => {
        if(params['loggedIn'] !== undefined && params['loggedIn'] === 'true') {
          this.infoMessage = `Welcome ${this.loginService.getUsername()}, you have logged in success(Switch)Fully`;
          setTimeout(()=>{
            //code goes here
            this.infoMessage = '';
          }, 5000);
        }
      });

  }

  getStudent() {
   this.studentService.getStudentById().subscribe(
      e => this.student = e
    );
  }

  getUsername() {
    return this.loginService.getUsername();
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();//does strange things with the routing, have to double click to get out of profile
  }


}
