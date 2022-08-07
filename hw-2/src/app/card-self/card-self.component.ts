import { Component, OnInit } from '@angular/core';
import { AppStoreService } from '../app.store.service';

@Component({
  selector: 'app-card-self',
  templateUrl: './card-self.component.html',
  styleUrls: ['./card-self.component.scss']
})
export class CardSelfComponent implements OnInit {
  selectedType: string = "daily"
  constructor(private appStoreService: AppStoreService) {

  }

  ngOnInit(): void {

  }
  onClick(period: string) {
    this.selectedType = period;
    this.appStoreService.changeActivityPeriod(this.selectedType)

  }

}
