import { Component } from '@angular/core';
import { AuthService } from 'src/app/share/auth.service';



@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent {
  constructor(private auth: AuthService){

  }

}
