import { Component } from '@angular/core';
import { NavService } from 'src/app/share/nav.service';
import { AuthService } from 'src/app/share/auth.service';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  constructor(private auth: AuthService,private nav: NavService) {}
  ngOnInit() 
  {
    this.auth.no();
    this.auth.doSomethingElseUseful();
    this.nav.yes();
    this.nav.doSomethingElseUseful();
  
  }
}
