import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { Observable  } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-navebar',
  templateUrl: './navebar.component.html',
  styleUrls: ['./navebar.component.css']
})
export class NavebarComponent implements OnInit {

  user: Observable<firebase.User>;
  userEmail:String;

  constructor( private authService:AuthService) { }

  ngOnInit() {

    this.user = this.authService.authUser();
    this.user.subscribe(user =>{

      this.userEmail =user.email;

    });
  }

  

}
