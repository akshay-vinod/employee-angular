import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GlobalDataService {
  private show: boolean = false;
  private subject = new Subject<any>();
  constructor() {}
  toggleData(): void {
    this.show = !this.show;
    this.subject.next(this.show);
  }
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
