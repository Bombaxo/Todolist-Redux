import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../redux/app.state';

import { FormControl, Validators } from '@angular/forms';
import { TodoAddAction } from '../../redux/todo/todo.actions';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewTodoComponent implements OnInit {

  textField: FormControl;

  constructor(
    private store: Store<AppState>
  ) {
    this.textField = new FormControl('', [Validators.required]);
  }

  ngOnInit() {
  }

  saveTodo() {
    if ( this.textField.value ) {
      const action = new TodoAddAction({
        id: Math.random().toString(),
        title: this.textField.value,
        completed: false,
        date: new Date()
      });

      this.store.dispatch(action);
      this.textField.setValue('');
    }
  }

}
