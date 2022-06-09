import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RegisterStudent} from "../../models/RegisterStudent";
import {environment} from "../../../environments/environment";
import {RegisterValid} from "../../models/RegisterValid";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  registerStudent(registerStudent: RegisterStudent): Observable<RegisterValid> {
    return this.http.post<RegisterValid>(`${environment.backendUrl}/register`, registerStudent)
  }
}
