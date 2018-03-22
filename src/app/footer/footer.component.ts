import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './../../redux/app.state';
import { SetFilterAction } from './../../redux/filter/filter.actions';
import { TodoClearCompletedAction } from './../../redux/todo/todo.actions';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  countTodos: number;
  currentFilter: string;
  showFooter: boolean;

  constructor(
    private store: Store<AppState>
  ) {
    this.readFilterState();
    this.readTodosState();
  }

  ngOnInit() {
  }

  doFilter( filter: string ) {
    const action = new SetFilterAction(filter);
    this.store.dispatch(action);
  }

  clearCompleted() {
    const action = new TodoClearCompletedAction();
    this.store.dispatch(action);
  }

  private readTodosState() {
    this.store.select('todos')
    .subscribe(todos => {
      this.countTodos = todos.filter(t => !t.completed).length;
      this.showFooter = todos.length > 0;
    });
  }

  private readFilterState() {
    this.store.select('filter')
    .subscribe(fitler => {
      this.currentFilter = fitler;
    });
  }

}
