import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { User } from './models';

@Component({
  selector: 'app-root',
  imports: [Header, UserComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly users: User[] = DUMMY_USERS;

  protected onUserSelect(id: string) {
    console.log(id);
  }
}
