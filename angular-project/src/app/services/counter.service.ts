import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter = 0;
  private subject = new Subject<any>;

  constructor() { }

  increment(): void{
    this.counter++;
    this.subject.next(this.counter);
  }

  onChange(): Observable<any>{
    return this.subject.asObservable();
  }

  getCounter(): number{
    return this.counter;
  }
}
