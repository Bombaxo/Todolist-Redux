import { Action } from '@ngrx/store';

import { Todo } from './todo.model';

export const TODO_ADD = '[Todos] add';
export const TODO_REMOVE = '[Todos] remove';
export const TODO_TOGGLE = '[Todos] toggle';
export const TODO_UPDATE = '[Todos] update';
export const TODO_CLEAR_COMPLETED = '[Todos] completed';

export class TodoAddAction implements Action {
  readonly type = TODO_ADD;

  constructor(
    public newTodo: Todo
  ) {}
}

export class TodoRemoveAction implements Action {
  readonly type = TODO_REMOVE;

  constructor(
    public id: string
  ) {}
}

export class TodoToggleAction implements Action {
  readonly type = TODO_TOGGLE;

  constructor(
    public id: string
  ) {}
}

export class TodoUpdateAction implements Action {
  readonly type = TODO_UPDATE;

  constructor(
    public id: string,
    public newTitle: string
  ) {}
}

export class TodoClearCompletedAction implements Action {
  readonly type = TODO_CLEAR_COMPLETED;
}


export type AllActions =
  TodoAddAction |
  TodoRemoveAction |
  TodoToggleAction |
  TodoUpdateAction |
  TodoClearCompletedAction;
