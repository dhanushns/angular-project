import { createFeatureSelector, createSelector } from '@ngrx/store';
import { counterFeatureKey, CounterState } from '../reducer/counter.reducer';

export const counterFeatureSelector = createFeatureSelector<CounterState>(counterFeatureKey);

export const counterSelector = createSelector(
  counterFeatureSelector,
  (state: CounterState)=>state.counter
)
