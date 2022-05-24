import {Component, OnInit} from '@angular/core';
import {CodelabService} from "../services/codelab.service";
import {Observable} from "rxjs";
import {Codelab} from "../models/Codelab";
import {LoginService} from "../services/login/login.service";
import {CodelabProgress} from "../models/CodelabProgress";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-codelab-overview',
  templateUrl: './codelab-overview.component.html',
  styleUrls: ['./codelab-overview.component.css']
})
export class CodelabOverviewComponent implements OnInit {
  codelabs!: Observable<Codelab[]>;
  codelabProgress: string[] = Object.values(CodelabProgress);
  codelabOverviewForm: FormGroup = this.fb.group({
    id: window.sessionStorage.getItem('id'),
    codelabsProgressList: this.fb.array([])
  })

  constructor(private codelabService: CodelabService, private loginService: LoginService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.codelabs = this.codelabService.getCodelabsForStudent(this.loginService.getId());
  }

  test() {
    const codelab = this.fb.group({
      title: 'String',
      progress: 'DONE'
    })
    this.codelabsProgressList.push(codelab);
    console.log(this.codelabOverviewForm.value);
    this.codelabService.saveCodelabsProgress(this.codelabOverviewForm.value);
  }

  get codelabsProgressList() {
    return this.codelabOverviewForm.controls["codelabsProgressList"] as FormArray;
  }
}
