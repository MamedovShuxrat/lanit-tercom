import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { data } from 'src/assets/data';
import { activityData } from './models/app.model';


@Injectable({
  providedIn: 'root'
})
export class AppStoreService {
  private activityPeriod: Subject<string>;
  activityPeriod$:Observable<string>

  constructor() {
    this.activityPeriod = new Subject<string>();
    this.activityPeriod$ = this.activityPeriod.asObservable();
   }

  public getActivity(){
    return data;
  }

  changeActivityPeriod(period: string){
    this.activityPeriod.next(period)
  }
}



