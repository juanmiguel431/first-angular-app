import { Component, computed, signal, WritableSignal } from '@angular/core';
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
  protected signalUser: WritableSignal<User>;

  constructor() {
    this.signalUser = signal(DUMMY_USERS[randomIndex]);
    this.user = DUMMY_USERS[randomIndex];
  }

  protected get imagePath(): string {
    return `images/users/${this.user.avatar}`;
  }

  protected computedImagePath = computed(() => `images/users/${this.signalUser().avatar}`)

  protected handleClick(event: MouseEvent) {
    console.log(event);

    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    const selected = DUMMY_USERS[randomIndex];

    this.user = selected;
    this.signalUser.set(selected);
  }
}
