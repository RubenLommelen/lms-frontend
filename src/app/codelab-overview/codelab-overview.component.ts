import { Component, OnInit } from '@angular/core';
import {CodelabService} from "../services/codelab.service";
import {Observable} from "rxjs";
import {Codelab} from "../models/Codelab";
import {CodelabProgress} from "../models/CodelabProgress";

@Component({
  selector: 'app-codelab-overview',
  templateUrl: './codelab-overview.component.html',
  styleUrls: ['./codelab-overview.component.css']
})
export class CodelabOverviewComponent implements OnInit {
  codelabs!: Observable<Codelab[]>;
  codelabProgress: string[] = Object.values(CodelabProgress);

  constructor(private codelabService: CodelabService) { }

  ngOnInit(): void {
    this.codelabs = this.codelabService.getCodelabsForStudent('1'); // change this later to logged in student id
  }

}
