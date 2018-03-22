import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { getVisibleTodos } from './../../redux/todo/todo.selectors';

import { Store } from '@ngrx/store';

import { AppState } from '../../redux/app.state';
import { Todo } from '../../redux/todo/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor(
    private store: Store<AppState>
  ) {
    this.readTodosState();
  }

  ngOnInit() {
  }

  private readTodosState() {
    this.store.select(getVisibleTodos).subscribe((todos) => {
      this.todos = todos;
    });
  }

}
