import { Component, OnInit, ViewChild, Input, ElementRef  } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState } from './../../redux/app.state';
import { Todo } from './../../redux/todo/todo.model';
import { TodoRemoveAction, TodoToggleAction, TodoUpdateAction } from './../../redux/todo/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('textInput') textInput: ElementRef;
  textField: FormControl;
  checkField: FormControl;
  editing: boolean;

  constructor(
    private store: Store<AppState>
  ) {
    this.checkField = new FormControl(false);
    this.checkField.valueChanges
    .subscribe((value) => {
      const action = new TodoToggleAction(this.todo.id);
      this.store.dispatch(action);
    });

    this.textField = new FormControl('', [Validators.required]);
  }

  ngOnInit() {
  }

  activeEditMode() {
    this.editing = true;
    setTimeout(() => {
      this.textInput.nativeElement.focus();
    });
  }

  deleteTodo() {
    const action = new TodoRemoveAction(this.todo.id);
    this.store.dispatch(action);
  }

  updateText() {
    if ( this.textField.value ) {
      const action = new TodoUpdateAction(this.todo.id, this.textField.value);
      this.store.dispatch(action);
    }else {
      this.editing = false;
    }
  }

}
