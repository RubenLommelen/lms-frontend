import {Component, OnInit} from '@angular/core';
import {NgbOffcanvas, OffcanvasDismissReasons} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {LoginService} from "../../services/login/login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  closeResult = '';
  loggedInUser$!: Observable<string | null>;
  message: boolean = true;


  constructor(private offcanvasService: NgbOffcanvas, private _router: Router, private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.loggedInUser$ = this.loginService.loggedInUser$;
    setTimeout(() => this.loginService.sendSignal(), 1);
  }



  open(content: any) {
    this.offcanvasService.open(content, {ariaLabelledBy: 'offcanvas-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === OffcanvasDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === OffcanvasDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on the backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  get userType() {
    return this.loginService.getUserType();
  }


  logout() {
    this.loginService.logout();
    this._router.navigateByUrl('login');
  }

}
