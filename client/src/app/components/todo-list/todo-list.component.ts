import {Component, inject, OnInit} from '@angular/core';
import {TodoModel} from '../../models/todo.model';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {TodoStateService} from '../../services/todo-state.service';
import {MatDialog} from '@angular/material/dialog';
import {TodoDialogComponent} from '../todo-dialog/todo-dialog.component';
import {TodoCardComponent} from '../todo-card/todo-card.component';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-todo-list',
  imports: [
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    TodoCardComponent
  ],
  templateUrl: './todo-list.component.html',
  standalone: true,
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  todos: TodoModel[] = [];
  todoService = inject(TodoStateService);
  authService = inject(AuthService);

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
    if (!this.authService.isLoggedIn()) {
      return;
    }

    this.todoService.loadTodosIfEmpty();
    this.todoService.todos$.subscribe(todos => {
      this.todos = todos;
      console.log(JSON.stringify(todos));
    });

  }

  openAddDialog(): void {
    this.dialog.open(TodoDialogComponent, {
      width: '500px',
      disableClose: true,
      backdropClass: 'dialog-backdrop'
    });
  }

  clear(): void {
    this.todoService.clearTodos();
  }
}
