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
  CodelabProgress = CodelabProgress;
  Object = Object;
  progressForm = this.fb.group({
    codelabs: this.fb.array([])
  });
  message: boolean = false;


  constructor(private codelabService: CodelabService, private loginService: LoginService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.codelabService.getCodelabsForStudent(this.loginService.getId()).subscribe(
      codelabs => {
        codelabs.forEach(codelab => codelab.studentId = this.loginService.getId());
        codelabs.forEach(codelab => this.codelabs.push(this.fb.group(codelab)))
      }
    );
  }

  get codelabs(): FormArray {
    return this.progressForm.get('codelabs') as FormArray;
  }

  onSubmit() {
    this.codelabService.saveCodelabsProgress(this.progressForm.value)
      .subscribe({
        next:() =>{
          this.message=true;
        },
        error: () =>{
        }
      });
    console.log(this.progressForm.value);

  }


}
