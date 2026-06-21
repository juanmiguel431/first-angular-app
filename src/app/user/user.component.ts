import { Component, computed, input, output } from '@angular/core';
import { User } from '../models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  standalone: false,
})
export class UserComponent {
  public readonly user = input.required<User>();
  public readonly onSelect = output<string>();
  public readonly active = input(false);

  protected readonly imagePath = computed(() => `images/users/${this.user().avatar}`);

  protected handleClick(event: MouseEvent) {
    this.onSelect.emit(this.user().id);
  }
}
