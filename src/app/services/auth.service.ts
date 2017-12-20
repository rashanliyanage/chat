import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/user';
@Injectable()



export class AuthService {

private user: Observable<firebase.User>;
private authState: any;

  constructor(private afAuth:AngularFireAuth,  private db: AngularFireDatabase,private router:Router ) 
  

 { 

    this.user = afAuth.authState;

  }

  authUser(){

    return this.user;


  }


  get currentUserId():string {

    return this.authState !== null ? this.authState.uid:'';

  }


login(email:string,password:string){
        return this.afAuth.auth.signInWithEmailAndPassword(email,password)
        .then((resolve)=>{

          const status ='onlline';
          this.setUserStatus(status);
          this.router.navigate(['chat']);

        })
}



  signUp(email: string, password: string, displayName: string){

console.log('in sign up page');

    return this.afAuth.auth.createUserWithEmailAndPassword(email,password)
    .then((user)=>{
        
      this.authState =user;
      const status ='onlline';
      this.setUserData(email,displayName,status);

    }).catch(error=> console.log(error));
  }

  setUserData(email: string, displayName: string, status: string):void{

    const path = `users/${this.currentUserId}`;

    const data ={

        email:email,
        displayName: displayName,
        status:status

    };
this.db.object(path).update(data)
.catch(error=> console.log(error));

  }


  setUserStatus(status:string):void{
    console.log('set user data');
        const path = `users/${this.currentUserId}`;
    
        const data ={
    
          
            status:status
    
        };

    
      }
    



}
