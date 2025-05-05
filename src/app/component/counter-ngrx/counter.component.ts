import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { counterSelector } from '../../counter/selector/counter.selectors';
import * as CounterActions from '../../counter/action/counter.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  counter$ !: Observable<number>

  constructor(private store: Store){
    this.counter$ = this.store.pipe(select(counterSelector));
  }

  onIncrement(){
    this.store.dispatch(CounterActions.increment())
  }

  onDecrement(){
    this.store.dispatch(CounterActions.decrement())
  }

  onReset(){
    this.store.dispatch(CounterActions.reset())
  }

}
