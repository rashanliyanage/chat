import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { User } from '../model/user';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() user: User;
  
  isUseronline:boolean =false;
  isUseroffline:boolean =false;


  
  
  constructor() { }

  ngOnInit() {
  console.log('status'+this.user.status);
 this.testStatus();
  
  
  }

testStatus():void{

  if(this.user.status=="onlline"){
    console.log('sta'+this.user.status);
        this.isUseronline=true;
    
      }else if(this.user.status=='offlline'){
        
        this.isUseroffline=true;
    
      }

}


}
