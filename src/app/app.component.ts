import {Component, OnInit} from '@angular/core';
import {EventService} from './services/event.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  eventCount = 0;
  constructor(public router: Router, private eventService: EventService) {
  }
  ngOnInit(): void {
    this.eventService.allSubscribedEvents.subscribe(eventDetails => this.eventCount = eventDetails.length); // async pipe in html
  }

  showSubscribedEventList(): void {
    this.router.navigateByUrl('/subscribed-event');
  }
}
