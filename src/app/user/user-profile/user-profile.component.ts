import { Component } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  user = new User(
    'Doe',
    'John',
    25,
    '',
    'https://randomuser.me/api/portraits/lego/2.jpg'
  );

  quote: string = 'test';
  showAge: boolean = false;

  toggleAge() {
    this.showAge = !this.showAge;
  }
}
