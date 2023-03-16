import { Component } from '@angular/core';
import { AuthService } from 'src/app/share/auth.service';
import { NavService } from 'src/app/share/nav.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor( public nav: NavService ) {}
}
