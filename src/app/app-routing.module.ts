import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeUserComponent } from './welcome-user/welcome-user.component';
import { CreateUserTicketComponent } from './create-user-ticket/create-user-ticket.component';
import { AppComponent } from './app.component';
import { CreateticketComponent } from './createticket/createticket.component';
import {  ViewticketComponent } from './viewticket/viewticket.component';
import { WelcomeMemberComponent } from './welcome-member/welcome-member.component';
import { CreateMemberTicketComponent } from './create-member-ticket/create-member-ticket.component';
import { MemberTicketComponent } from './member-ticket/member-ticket.component';


const routes : Routes =[
  { path : 'xyz', component : AppComponent  },
  { path : 'x', component : WelcomeUserComponent},
  { path : 'CreateUserTicketComponent', component : CreateUserTicketComponent},
  { path : 'CreateticketComponent', component : CreateticketComponent},
  { path : 'ViewticketComponent', component : ViewticketComponent},
  { path : '', component : WelcomeMemberComponent},
  { path : 'CreateMemberTicketComponent', component : CreateMemberTicketComponent},
  
  { path : 'MemberTicketComponent', component : MemberTicketComponent},
  
  
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ 
    AppComponent,
   CreateUserTicketComponent ,
   MemberTicketComponent,
  WelcomeUserComponent ,
   ViewticketComponent,
   CreateticketComponent]
