import {Component, OnInit} from '@angular/core';
import {interval, takeWhile} from "rxjs";

@Component({
  selector: 'app-progression-overview',
  templateUrl: './progression-overview.component.html',
  styleUrls: ['./progression-overview.component.css']
})
export class ProgressionOverviewComponent implements OnInit {
  amountOfCodeLabs: number = 10;
  amountOfCompletedCodelabs: number = 5;
  start: number = 0;

  constructor() { }

  ngOnInit(): void {
    interval(100).pipe(takeWhile(()=>this.start<this.amountOfCompletedCodelabs)).subscribe( () => this.start +=1);
  }



}
