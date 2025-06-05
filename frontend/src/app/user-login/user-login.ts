import { Component } from '@angular/core';
import { AuthService } from '../auth';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './user-login.html',
  styleUrl: './user-login.css'
})
export class UserLogin {
  email:string = '';
  password: string='';

  constructor(private auth:AuthService,private router:Router){}

  onSubmit(){
    this.auth.login(this.email, this.password).then(()=>
    this.router.navigate(['/dashboard']))
  .catch(error=>alert(error.message));
  }
}
