import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import { Router } from '@angular/router';
import { Urls } from 'src/app/urls';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  urls:Urls=new Urls();

  constructor(public router:Router){}

  takeMeToURL(url:string){
    window.location.href=url;
  }

  NavigateToStats(){
    
  }

}
