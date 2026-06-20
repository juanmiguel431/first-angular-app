import { Component, computed, input, output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { User } from '../models';
import { Card } from '../shared/card/card';

@Component({
  selector: 'app-user',
  imports: [NgOptimizedImage, Card],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  public readonly user = input.required<User>();
  public readonly onSelect = output<string>();
  public readonly active = input(false);

  protected readonly imagePath = computed(() => `images/users/${this.user().avatar}`);

  protected handleClick(event: MouseEvent) {
    console.log(event);
    this.onSelect.emit(this.user().id);
  }
}
