import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoginService} from "../services/login/login.service";
import {StudentService} from "../services/student.service";
import {Subscription} from "rxjs";
import {Student} from "../models/Student";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  public username!: any;
  subscription!: Subscription;
  student!: Student;

  constructor(private loginService: LoginService, private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.username = this.getUsername();
    this.getStudent();
  }

  getStudent() {
    this.subscription = this.studentService.getStudentById().subscribe(
      e => this.student = e
    );
  }

  getUsername() {
    return this.loginService.getUsername();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
