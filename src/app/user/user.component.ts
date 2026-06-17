import { Component, computed, input, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [NgOptimizedImage],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  public avatar = input.required<string>()
  public name = input.required<string>()

  protected imagePath = computed(() => `images/users/${this.avatar()}`)

  protected handleClick(event: MouseEvent) {
    console.log(event);
  }
}
