import { Component } from '@angular/core';
import * as data  from '../assets/data.json';
import { activityData } from './app-model/app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  activity: activityData = data[0]
}
