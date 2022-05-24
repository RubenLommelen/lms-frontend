import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Codelab} from "../models/Codelab";

@Injectable({
  providedIn: 'root'
})
export class CodelabService {

  constructor(private http: HttpClient) {}

  getCodelabsForStudent(id: string | null): Observable<Codelab[]> {
    return this.http.get<Codelab[]>(`${environment.backendUrl}/students/${id}/codelabs`);
  }
}
