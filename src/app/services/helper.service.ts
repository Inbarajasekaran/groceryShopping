import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  private subject = new BehaviorSubject<any>(localStorage.getItem('user')); //set default value

  showName(name: string) {
    this.subject.next(name); //all subscribers get the new value
  }
  getName() {
    return this.subject.asObservable();
  }
}
