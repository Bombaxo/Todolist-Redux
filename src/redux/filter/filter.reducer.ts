import { AllActions, SET_FILTER } from './filter.actions';

export function filterReducer(oldState: string = 'SHOW_ALL', action: AllActions) {

  if (!action) {
    return oldState;
  }

  switch (action.type) {
    case SET_FILTER: {
      return action.newFilter;
    }
    default: {
      return oldState;
    }
  }
}
