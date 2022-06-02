import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Student} from "../../models/Student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private userType!: string;

  constructor(private http: HttpClient) {}

  getStudentById(): Observable<Student> {
    this.userType = window.sessionStorage.getItem('userType')!.toLowerCase();
    return this.http.get<Student>(`${environment.backendUrl}/${this.userType}s/${window.sessionStorage.getItem('id')}`);
  }

}
