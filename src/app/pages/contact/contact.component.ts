import { Component,OnInit} from '@angular/core';
import { AuthService } from 'src/app/share/auth.service';
import { NavService } from 'src/app/share/nav.service';
import { Firestore, collection } from '@angular/fire/firestore';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit  {
  constructor(private d:AuthService,private nav:NavService,private fire:Firestore) { }
name: string ="";
email: string = '';
subject: string = '';
message: string = '';

contact() {
  if (this.name == '') {
    alert('Please enter your name');
    return;
  }
  if (this.email == '') {
    alert('Please enter your email');
    return;
  }
  if (this.subject == '') {
    alert('Please enter your subject');
    return;
  }

  if (this.message == '') {
    alert('Please enter your message ');
    return;
  }

  const cont = {
    email:this.email,
    name:this.name,
    subject:this.subject,
    messahe:this.message,
  }
  const docRef = collection(this.fire, "contactUs")
    this.d.insertData(docRef, cont)

    this.name = ''
    this.email = ''
    this.subject = ''
    this.message = ''



}
  ngOnInit() 
  {
    this.d.yes();
    this.d.doSomethingElseUseful();
    this.nav.no();
    this.nav.doSomethingElseUseful();
  }
}
