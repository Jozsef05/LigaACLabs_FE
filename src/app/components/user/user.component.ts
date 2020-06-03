import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

//declare var require: any;
//const data: any = require('src/assets/data.json');

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class UserComponent implements OnInit {
  users: User[];
  test: string;
  details = { birthDate: "", cars: [] };

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
     this.users = this.userService.getUsers();
   // this.users = data;

  }

  getUsers(): void {
     this.users = this.userService.getUsers();
  //  this.users = data;
  }
  getUserDetails(id) {
    this.details = { birthDate: "", cars: [] };

    this.users.map(user => {
      if (user.id == id) {
        let date = new Date(user.birthDate);
        let day =  date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        let month =  date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth();
        this.details.birthDate = day + "." + month + "." + date.getFullYear();
        this.details.cars = user.cars;
      }
    })
  }
}
