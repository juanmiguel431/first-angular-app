import { Component, computed, input, output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [NgOptimizedImage],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  public readonly id = input.required<string>();
  public readonly avatar = input.required<string>();
  public readonly name = input.required<string>();
  public readonly onSelect = output<string>();

  protected readonly imagePath = computed(() => `images/users/${this.avatar()}`);

  protected handleClick(event: MouseEvent) {
    console.log(event);
    this.onSelect.emit(this.id());
  }
}
