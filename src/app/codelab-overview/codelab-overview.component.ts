import { Component, OnInit } from '@angular/core';
import {CodelabService} from "../services/codelab.service";
import {Observable} from "rxjs";
import {Codelab} from "../models/Codelab";
import {LoginService} from "../services/login/login.service";

@Component({
  selector: 'app-codelab-overview',
  templateUrl: './codelab-overview.component.html',
  styleUrls: ['./codelab-overview.component.css']
})
export class CodelabOverviewComponent implements OnInit {
  codelabs!: Observable<Codelab[]>

  constructor(private codelabService: CodelabService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.codelabs = this.codelabService.getCodelabsForStudent(this.loginService.getId());
  }

}
