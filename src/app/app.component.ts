import { Component } from '@angular/core';
import {EventService} from './services/event.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EventPlanner';
  eventCount = 0;
  constructor(private eventService: EventService, public router: Router) {
    this.eventService.allSubscribedEvents.subscribe(state => this.eventCount = state.length);
  }

  showSubscribedEventList() {
    this.router.navigate(['/subscribed-event']);
  }
}
