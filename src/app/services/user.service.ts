import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interfaces/user';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  
  constructor(
    private http: HttpClient,
  ) { }

  getUsers(): User[]  {
    this.http.get<User[]>('http://localhost:8080/jpa/users').subscribe(res => this.users = res);
    return this.users;
  }
}