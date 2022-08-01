import { UserInterface } from './../models/users.interface';
import { Observable } from 'rxjs';
import { UserService } from './../repository/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  allUsers$: Observable<UserInterface[]> = this.userService.getUsers();
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
