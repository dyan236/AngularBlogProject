import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private showMenu: boolean=false;
  private subject = new Subject<any>();

  constructor() { }

  toggleShowMenu(): void{
    this.showMenu=!this.showMenu;
    this.subject.next(this.showMenu);
  }

  onToggle(): Observable<any>{
    return this.subject.asObservable();
  }
}
