import { Component,OnInit } from '@angular/core';
import { AuthService } from 'src/app/share/auth.service';
import { NavService } from 'src/app/share/nav.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  constructor(private auth: AuthService,private nav: NavService) {

  }

  ngOnInit() 
{
  this.auth.yes();
  this.auth.doSomethingElseUseful();
  this.nav.no();
  this.nav.doSomethingElseUseful();

}
}
