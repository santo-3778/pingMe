import { Component,OnInit} from '@angular/core';
import { AuthService } from 'src/app/share/auth.service';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';  
import { NavService } from 'src/app/share/nav.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  constructor(private d:AuthService,private r:Router,private nav:NavService) { }
userData:any
  
  gotopage(id:any)
  {
    localStorage.setItem('id',id)
    this.r.navigate(['/single']);
  }
  ngOnInit() 
  {
    this.d.no();
    this.d.doSomethingElseUseful();
    this.nav.yes();
    this.nav.doSomethingElseUseful();
    this.userData=this.d.view()
  }
}