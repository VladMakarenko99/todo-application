import {Component, inject} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {AuthOptionsComponent} from '../auth-options/auth-options.component';
import {TodoListComponent} from '../todo-list/todo-list.component';
import {HeaderComponent} from '../header/header.component';
import {TodoCalendarComponent} from '../todo-calendar/todo-calendar.component';

@Component({
  selector: 'app-home',
  imports: [
    AuthOptionsComponent,
    TodoListComponent,
    HeaderComponent,
    TodoCalendarComponent
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  authService = inject(AuthService);
  isLoggedIn = false;

  ngOnInit() {
    this.authService.isAuthenticated.subscribe(isAuthenticated => {
      this.isLoggedIn = isAuthenticated;
    });
  }
}
