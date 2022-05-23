import { Injectable } from '@angular/core';
import {Observable, tap} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";
import { environment } from 'src/environments/environment';
import {User} from "../../model/User";
import {Token} from "../../model/Token";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private backendUrl: string;
  private readonly TOKEN_KEY: string = 'token';

  constructor(private http: HttpClient) {
    this.backendUrl = `${environment.backendUrl}/login`;
  }

  login(user: User): Observable<Token>{
    return this.http.post<Token>(this.backendUrl, user).pipe(
      tap(response => sessionStorage.setItem(this.TOKEN_KEY, response.token))
    );
  }

  getToken() {
    return sessionStorage.getItem(this.TOKEN_KEY);
  }
  getName(): Observable<void>{
    return this.http.get<void>(this.backendUrl);
  }

}
