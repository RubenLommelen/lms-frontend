import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RegisterStudent} from "../../models/RegisterStudent";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  registerStudent(registerStudent: RegisterStudent): Observable<void> {
    return this.http.post<void>(`${environment.backendUrl}/register`, registerStudent)
  }
}
