import { Component,OnInit } from '@angular/core';
import { NavService } from 'src/app/share/nav.service';
import { AuthService } from 'src/app/share/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private auth: AuthService,private nav: NavService) {

  }
  ngOnInit() 
{

  this.auth.no();
  this.auth.doSomethingElseUseful();
  this.nav.yes();
  this.nav.doSomethingElseUseful();

}
}
