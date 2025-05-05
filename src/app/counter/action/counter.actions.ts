import { createAction, emptyProps, props } from '@ngrx/store';

export const increment = createAction(
  '[Counter] Counter Increment'
);

export const decrement = createAction(
  '[Counter] Counter Decrement'
);

export const reset = createAction(
  '[Counter] Counter Reset'
);
