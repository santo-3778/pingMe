import { Component,OnInit} from '@angular/core';
import { AuthService } from 'src/app/share/auth.service';
import { NavService } from 'src/app/share/nav.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit  {
  constructor(private d:AuthService,private nav:NavService) { }
  ngOnInit() 
  {
    this.d.yes();
    this.d.doSomethingElseUseful();
    this.nav.no();
    this.nav.doSomethingElseUseful();
  }
}
