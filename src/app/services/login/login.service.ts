import {Injectable} from '@angular/core';
import {Observable, Subject, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from 'src/environments/environment';
import {User} from "../../models/User";
import {Token} from "../../models/Token";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private backendUrl: string;
  private readonly TOKEN_KEY: string = 'token';
  private readonly USERNAME_KEY: string = 'username';
  private readonly USER_TYPE_KEY: string = 'userType';
  private readonly ID_KEY: string = 'id';
  private _loggedInUser$: Subject<string | null> = new Subject();


  constructor(private http: HttpClient) {
    this.backendUrl = `${environment.backendUrl}/login`;
  }

  login(user: User): Observable<Token>{
    return this.http.post<Token>(this.backendUrl, user).pipe(
      tap(response => sessionStorage.setItem(this.TOKEN_KEY, response.token)),
      tap(response => sessionStorage.setItem(this.USERNAME_KEY,response.username)),
      tap(response => sessionStorage.setItem(this.ID_KEY, response.id)),
      tap(response => sessionStorage.setItem(this.USER_TYPE_KEY, response.userType)),
      tap(() => this.sendSignal())
    );
  }

  getToken() {
    return sessionStorage.getItem(this.TOKEN_KEY);
  }


  getUsername(){
    return sessionStorage.getItem(this.USERNAME_KEY);
  }

  getUserType(){
    return sessionStorage.getItem(this.USER_TYPE_KEY);
  }

  getId(){
    return sessionStorage.getItem(this.ID_KEY);
  }

  get loggedInUser$(): Observable<string | null> {
    return this._loggedInUser$;
  }

  sendSignal() : void {
    this._loggedInUser$.next(this.getUsername());
  }

  logout(){
    sessionStorage.removeItem(this.ID_KEY);
    sessionStorage.removeItem(this.TOKEN_KEY);
    sessionStorage.removeItem(this.USERNAME_KEY);
    sessionStorage.removeItem(this.USER_TYPE_KEY);
    this.sendSignal();
  }




}
