import { Component } from '@angular/core';
import { AuthService } from 'src/app/share/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent {
  sid:any
  id:any
  data:any
 constructor(private a:AuthService,private r:Router){ }
ngOnInit() {
  this.id=localStorage.getItem('id');
  
  this.a.getUser(this.id)
  .then((data)=>this.data=data)
  
}
}
