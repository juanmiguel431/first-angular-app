import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { User } from './models';
import { UserTasks } from './user-task/user-tasks.component';

@Component({
  selector: 'app-root',
  imports: [Header, UserComponent, UserTasks],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly users: User[] = DUMMY_USERS;
  protected user: User | undefined;

  protected onUserSelect(id: string) {
    this.user = this.users.find(user => user.id === id);
  }
}
