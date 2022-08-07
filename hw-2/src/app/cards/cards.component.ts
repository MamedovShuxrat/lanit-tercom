import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppStoreService } from '../app.store.service';
import { activityData } from '../models/app.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit, OnDestroy {
  activityList: activityData[] = []
  selectActivity: any
  subscription: Subscription
  selectedType: string

  constructor(private appStoreService: AppStoreService) {
    this.selectedType = 'daily'
    this.activityList = this.appStoreService.getActivity()
    this.resetDate()
    this.subscription = this.appStoreService.activityPeriod$.subscribe(result => {
      this.selectedType = result;
      this.resetDate()
    })
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  resetDate(): void {
    console.log(this.selectActivity);

    this.selectActivity = this.activityList.map((data: any) => {
      return {
        title: data.title,
        period: data.timeframes[this.selectedType]
      }

    })
  }




}
