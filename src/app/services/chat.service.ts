
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, AngularFireDatabaseModule,FirebaseObjectObservable} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { ChatMessage } from '../model/chat-message';
import { Observable } from 'rxjs/Observable';

import { AuthService} from './auth.service';
import * as firebase from 'firebase/app';




@Injectable()
export class ChatService {


   user:firebase.User;
  chatMessages: FirebaseListObservable<ChatMessage[]>;
   ChatMessage:ChatMessage;
   userName:Observable<String>;




  constructor(private afAuth: AngularFireAuth, private db:AngularFireDatabase) { 

    
this.afAuth.authState.subscribe(auth => {


if(auth !== undefined && auth !== null){

this.user =auth;

}

this.getUser().subscribe(a=>{

this.userName =a.displayName;

});


});

  }

  getUser(){

    const userId = this.user.uid;
    const path = `/users/${userId}`;
    return this.db.object(path);


  }

  getUsers(){


const path ='/users';
return this.db.list(path);

  }



getMessages():FirebaseListObservable<ChatMessage[]>{

console.log('calling get messages()...');

    return this.db.list('messages',{
    query: {
                limitToLast:25,
                orderByKey:true

              }
              });

}


  sendMessage(msg:String){


    const timeatamp =this.getTimeStamp();
    const email = this.user.email;
    this.chatMessages = this.getMessages();
    this.chatMessages.push({

        message:msg,
        timeSent:timeatamp,
        userName:this.userName,
        //userName:'test- user',
        email:email


    });

    console.log('called sendMessege');
  }

  getTimeStamp(){

    const now = new Date();

    const date = now.getUTCFullYear() + '/'+
                  (now.getUTCMonth()+1)+'/'+
                  now.getUTCDate();

    const time = now.getUTCHours() + ':'+
                  now.getUTCMinutes() +':'+
                  now.getUTCSeconds();


      return (date + ' ' + time);


  }


}
