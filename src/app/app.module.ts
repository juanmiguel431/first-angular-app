import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Header } from './header/header';
import { UserComponent } from './user/user.component';
import { UserTasks } from './user-tasks/user-tasks.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, Header, UserComponent, UserTasks],
})
export class AppModule {}
