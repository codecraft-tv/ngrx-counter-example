import {Component} from "@angular/core";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {INCREMENT, DECREMENT, RESET} from './app.reducers';

@Component({
  selector: 'counter',
  template: `
    <div class="content">
        <button (click)="increment()">+</button>
        <button (click)="decrement()">-</button>
        <button (click)="reset()">Reset</button>
        <h3>{{counter$ | async}}</h3>
    </div>
    `
})
export class CounterComponent {
  counter$: Observable<number>;

  constructor(private store: Store<number>) {
    this.counter$ = this.store.select<number>('counter')
  }

  increment() {
    this.store.dispatch({type: 'INCREMENT'});
  }

  decrement() {
    this.store.dispatch({type: 'DECREMENT'});
  }

  reset() {
    this.store.dispatch({type: 'RESET'});
  }
}
