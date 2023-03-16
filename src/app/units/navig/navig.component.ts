import { Component } from '@angular/core';
import { AuthService } from 'src/app/share/auth.service';
@Component({
  selector: 'app-navig',
  templateUrl: './navig.component.html',
  styleUrls: ['./navig.component.css']
})
export class NavigComponent {
  constructor( public nav: AuthService ) {}
}
