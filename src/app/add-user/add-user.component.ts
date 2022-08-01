import { UserService } from './../repository/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  form!: FormGroup;
  constructor(private userService: UserService) {
    this.form = new FormGroup({
      name: new FormControl(null),
      age: new FormControl(null),
      hierarchyUser: new FormControl(null),
    });
  }

  ngOnInit(): void {}

  addUser(): void {
    this.userService.addUser(this.form.value).subscribe();
  }
}
