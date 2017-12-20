import { Routes,RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { SignupFormComponent} from './signup-form/signup-form.component';
import { NgModule } from '@angular/core';


export const routes:Routes=[
    {path:'signup',component:SignupFormComponent},
    {path:'login',component: LoginFormComponent},
    {path:'chat',component:ChatroomComponent},
    {path:'',redirectTo:'/login',pathMatch:'full'}
    
    
    
    ]
    
    @NgModule({
    
    imports:[RouterModule.forRoot(routes)],
    
    exports:[RouterModule],
    declarations:[]
    
    
    })
    
    export class AppRoutingModule{ }