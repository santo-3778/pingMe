import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/share/auth.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  email: string = '';
  password: string = '';
  name: string = '';
  gender: string = '';
  user: any;
  constructor(private auth: AuthService) {}

  register() {
    if (this.name == '') {
      alert('Please enter your name');
      return;
    }
    if (this.email == '') {
      alert('Please enter your email');
      return;
    }
    if (this.password == '') {
      alert('Please enter your password');
      return;
    }

    if (this.gender == '') {
      alert('Please enter your gender');
      return;
    }

    const cred = {
      email:this.email,
      password:this.password,
      name:this.name,
      gender:this.gender
    }
    this.auth.register(cred);
    this.email = '';
    this.password = '';
    this.name = '';
    this.gender = '';
  }

  ngOnInit() {
    this.auth.yes();
    this.auth.doSomethingElseUseful();
  }

  
}
