import { Injectable } from '@angular/core';
import { BehaviorSubject, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  public spinner$ = new BehaviorSubject(false);
  constructor() { }

  isLoading() {
    return this.spinner$.getValue()
  }

  show() {
    this.spinner$.next(true);
  }

  hide() {
    this.spinner$.next(false);
  }
}
