import {Component, OnInit} from '@angular/core';
import {interval, Observable, takeWhile} from "rxjs";
import {CodelabService} from "../services/codelab.service";
import {ProgressOverview} from "../models/ProgressOverview";

@Component({
  selector: 'app-progression-overview',
  templateUrl: './progression-overview.component.html',
  styleUrls: ['./progression-overview.component.css']
})
export class ProgressionOverviewComponent implements OnInit {
  // amountOfCodeLabs: number = 10;
  // amountOfCompletedCodelabs: number = 5;
  // start: number = 0;

  progressOverviewList$!: Observable<ProgressOverview[]>;

  constructor(private codelabService: CodelabService) { }

  ngOnInit(): void {
    this.progressOverviewList$ = this.codelabService.getProgressOverview();
    // interval(100).pipe(takeWhile(()=>this.start<this.amountOfCompletedCodelabs)).subscribe( () => this.start +=1);
  }



}
