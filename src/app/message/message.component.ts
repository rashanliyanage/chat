import { Component, OnInit ,OnChanges} from '@angular/core';
import {ChatService }  from '../services/chat.service';
import {Observable } from 'rxjs/Observable';
import { ChatMessage} from '../model/chat-message'

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  inputs:['chatMessage']
})
export class MessageComponent implements OnInit {

chatMessage:ChatMessage;
userEmail: String;
userName: String;
messageContent:String;
timeStamp: Date = new Date();
isOwnMessage:boolean;


  constructor() { }

  ngOnInit(chatMessage =this.chatMessage) {
  this.messageContent =chatMessage.message;
  this.timeStamp =chatMessage.timeSent;
  this.userEmail =chatMessage.email;
  this.userName =chatMessage.userName;
  
  }

}
