import {Component, OnInit} from '@angular/core';
import {CodelabService} from "../services/codelab/codelab.service";
import {LoginService} from "../services/login/login.service";
import {CodelabProgress} from "../models/CodelabProgress";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";

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
  closeResult = '';
  codelabName!: any;
  codelabId!: any;
  codelabCommentForm!: FormGroup;



  constructor(private codelabService: CodelabService, private loginService: LoginService, private fb: FormBuilder, private modalService: NgbModal) {

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
        next: () => {
          this.message = true;
          setTimeout(() => {
            //code goes here
            this.message = false
          }, 5000);
        },
        error: () => {
          this.error = true;
          setTimeout(() => {
            //code goes here
            this.error = false
          }, 5000);
        }
      });
    console.log(this.progressForm.value);
  }

  myForm() {
    this.codelabCommentForm = this.fb.group({
      comment: '',
      codelabId: this.codelabId,
      studentId: this.loginService.getId()
    });
  }

  open(content: any, codelabName: any, codelabId: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.codelabName = codelabName;
    this.codelabId = codelabId;
    this.myForm();
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  saveComment() {
    console.log(this.codelabCommentForm.value);
  }
}
