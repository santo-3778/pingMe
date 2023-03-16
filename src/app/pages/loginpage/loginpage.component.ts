import { Component,OnInit } from '@angular/core';
import { AuthService } from 'src/app/share/auth.service';
import { NavService } from 'src/app/share/nav.service';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent  implements OnInit {


  email: string ="";
  password: string ="";
  uid : string ="";

  constructor(private auth: AuthService,private nav:NavService) {

  }
login(){
if (this.email==""){

alert("Please enter your email")
return;
}
if (this.password==""){

  alert("Please enter your password")
  return;
  }
this.auth.login(this.email,this.password);

this.email='';
this.password='';

}
ngOnInit() 
{
  this.auth.yes();
  this.auth.doSomethingElseUseful();
  this.nav.no();
  this.nav.doSomethingElseUseful();
}
}


