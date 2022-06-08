import {Component, OnInit} from '@angular/core';
import {CodelabService} from "../services/codelab/codelab.service";
import {LoginService} from "../services/login/login.service";
import {CodelabProgress} from "../models/CodelabProgress";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute, Router} from "@angular/router";

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
  codelabName: any;
  codelabId: any;
  codelabCommentForm!: FormGroup;
  codelabComment!: any;
  searchText = '';
  codelabSolutionUrl: any;
  codelabCompleted!: boolean;


  constructor(private codelabService: CodelabService, private loginService: LoginService, private fb: FormBuilder, private modalService: NgbModal, private router: Router, private activatedRoute: ActivatedRoute) {

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
            window.location.reload();

          }, 1000);

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

  myForm(codelabComment: string, codelabSolutionUrl: string) {
    this.codelabCommentForm = this.fb.group({
      codelabComment: codelabComment,
      codelabSolutionUrl: codelabSolutionUrl
    });
  }

  open(content: any, codelabName: any, codelabId: any, codelabComment: any, codelabSolutionUrl: any, codelabCompleted: boolean) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.codelabName = codelabName;
    this.codelabId = codelabId;
    this.codelabComment = codelabComment;
    this.codelabSolutionUrl = codelabSolutionUrl;
    this.codelabCompleted = codelabCompleted;
    console.log(codelabComment)
    this.myForm(codelabComment, codelabSolutionUrl);
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
    this.codelabService.saveCodelabComment(this.codelabCommentForm.value, this.codelabId).subscribe({
      next: () => {
        window.location.reload()
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
