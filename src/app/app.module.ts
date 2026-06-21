import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Header } from './header/header';
import { UserComponent } from './user/user.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './user-tasks/tasks.module';

@NgModule({
  declarations: [AppComponent, Header, UserComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, NgOptimizedImage, SharedModule, TasksModule],
})
export class AppModule {}
