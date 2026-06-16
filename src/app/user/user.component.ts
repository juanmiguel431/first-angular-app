import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [NgOptimizedImage],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() public avatar: string;
  @Input() public name: string;

  constructor() {
    this.avatar = '';
    this.name = '';
  }

  protected get imagePath(): string {
    return `images/users/${this.avatar}`;
  }

  protected handleClick(event: MouseEvent) {
    console.log(event);
  }
}
