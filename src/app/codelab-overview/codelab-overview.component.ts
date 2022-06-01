import {Component, OnInit} from '@angular/core';
import {CodelabService} from "../services/codelab.service";
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
  error: boolean = false;
  userType!: string | null;


  constructor(private codelabService: CodelabService, private loginService: LoginService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.codelabService.getCodelabsForStudent(this.loginService.getId()).subscribe(
      codelabs => {
        codelabs.forEach(codelab => codelab.studentId = this.loginService.getId());
        codelabs.forEach(codelab => this.codelabs.push(this.fb.group(codelab)))
      }
    );
    this.userType = this.loginService.getUserType();
  }

  get codelabs(): FormArray {
    return this.progressForm.get('codelabs') as FormArray;
  }

  onSubmit() {
    this.codelabService.saveCodelabsProgress(this.progressForm.value)
      .subscribe({
        next:() =>{
          this.message=true;
          setTimeout(()=>{
            //code goes here
            this.message=false
          }, 5000);
        },
        error: () =>{this.error=true;
          setTimeout(()=>{
            //code goes here
            this.error=false
          }, 5000);
        }
      });
    console.log(this.progressForm.value);

  }


}
