import { BehaviorSubject, Observable, scan, Subject } from 'rxjs';

export class store<T extends unknown> {
  private _store: BehaviorSubject<T>;
  private _stateUpdates: Subject<unknown>;

  constructor(public initialState: T) {
    this._store = new BehaviorSubject(initialState);

    this._stateUpdates = new Subject();

    this._stateUpdates
      .pipe(
        scan((a: Partial<T>, c: Partial<T>) => {
          return { ...a, ...c };
        }, initialState)
      )
      .subscribe(this._store);
  }

  setState(updateState: Partial<T>) {
    this._stateUpdates.next(updateState);
  }

  getState() {
    return this._store;
  }
}
