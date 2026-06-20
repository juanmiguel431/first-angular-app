import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { User } from './models';

const usersMap = new Map<string, User>(
  DUMMY_USERS.map((user) => [user.id, user])
);

@Component({
  selector: 'app-root',
  standalone: false,
  // imports: [Header, UserComponent, UserTasks], // Only standalone components can use imports
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  protected readonly users: User[] = DUMMY_USERS;
  protected selectedUser: User | undefined;

  protected onUserSelect(id: string) {
    this.selectedUser = usersMap.get(id);
  }
}
