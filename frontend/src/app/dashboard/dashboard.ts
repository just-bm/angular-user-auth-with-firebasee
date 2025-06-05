import { Component } from '@angular/core';
import {AuthService} from '../auth';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  constructor(private auth:AuthService){}
  user: any;

  ngOnInit() {
    this.user = this.auth.getCurrentUser();
  }
  

  logout(){
    this.auth.logout();
  }
}
