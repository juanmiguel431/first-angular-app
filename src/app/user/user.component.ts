import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { NgOptimizedImage } from '@angular/common';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

type User = {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  imports: [NgOptimizedImage],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  protected user: User;

  constructor() {
    this.user = DUMMY_USERS[randomIndex];
  }

  protected get imagePath(): string {
    return `images/users/${this.user.avatar}`;
  }

  protected handleClick(event: MouseEvent) {
    console.log(event);

    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.user = DUMMY_USERS[randomIndex];
  }
}
