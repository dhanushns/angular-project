import { createReducer, on } from '@ngrx/store';
import * as CounterActions from '../action/counter.actions';

export const counterFeatureKey = 'counter';

export interface CounterState{
  counter: number
}

export const initialState: CounterState = {
  counter: 0
}

export const counterReducer = createReducer(
  initialState,
  on(CounterActions.increment, (state)=>({...state, counter : state.counter + 1})),
  on(CounterActions.decrement, (state)=>({...state, counter: state.counter - 1})),
  on(CounterActions.reset, (state)=>({...state, counter: state.counter - state.counter}))
);


