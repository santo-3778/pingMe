import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class NavService {

  visible: boolean | undefined;


  no() { this.visible = false; }

  yes() { this.visible = true; }


  doSomethingElseUseful() { }
}
