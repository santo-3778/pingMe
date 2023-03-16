import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SingleComponent } from './pages/single/single.component';
import { UpdateprofileComponent } from './pages/updateprofile/updateprofile.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { MessageComponent } from './pages/message/message.component';
import { CrushboxComponent } from './pages/crushbox/crushbox.component';

const routes: Routes = [
{
  path:'',component:MainpageComponent

},
{

path:'home',component:HomepageComponent
},
{
  path:'login',component:LoginpageComponent

},
{
  path:'about',component:AboutComponent
},
{
  path:'signup',component:SignupComponent
},
{
  path:'contact',component:ContactComponent
},
{
  path:'profile',component:ProfileComponent
},
{
  path:'single',component:SingleComponent
},
{
  path:'update',component:UpdateprofileComponent
},
{
  path:'notification',component:NotificationComponent
},
{
  path:'message',component:MessageComponent
},
{
  path:'crush',component:CrushboxComponent
}










];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 