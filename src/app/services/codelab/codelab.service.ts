import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Codelab} from "../../models/Codelab";
import {ProgressOverview} from "../../models/ProgressOverview";
import {CodelabComment} from "../../models/CodelabComment";

@Injectable({
  providedIn: 'root'
})
export class CodelabService {

  constructor(private http: HttpClient) {}

  getCodelabsForStudent(id: string | null): Observable<Codelab[]> {
    return this.http.get<Codelab[]>(`${environment.backendUrl}/students/${id}/codelabs`);
  }

  saveCodelabsProgress({codelabs}: any) : Observable<any> {
    return this.http.post<any>(`${environment.backendUrl}/students/${window.sessionStorage.getItem('id')}/codelabs`, codelabs);
  }

  getProgressOverview(): Observable<ProgressOverview[]> {
    return this.http.get<ProgressOverview[]>(`${environment.backendUrl}/progress`);
  }

  saveCodelabComment(codelabComment: CodelabComment, codelabId: number) {
    return this.http.post<CodelabComment>(`${environment.backendUrl}/students/${window.sessionStorage.getItem('id')}/codelabs/${codelabId}/comments`, codelabComment);
  }
}
