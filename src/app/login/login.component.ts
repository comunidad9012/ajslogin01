import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users/users.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

//export class LoginComponent implements OnInit {


  export class LoginComponent {
    email!: string;
    password!: string;
  
    constructor(public userService: UsersService) {}
  
    login() {
      const user = { email: this.email, password: this.password };
      this.userService.login(user).subscribe((data) => {
        console.log(data);
      });
    }
  //ngOnInit(): void {
  //}
  }

 

