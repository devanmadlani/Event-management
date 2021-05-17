import {Component, OnInit, OnDestroy, ViewEncapsulation} from '@angular/core';
import {Subscription} from 'rxjs';
import {Validators, FormBuilder} from '@angular/forms';
import {EventDetails} from '../../models/event.model';
import {EventService} from '../../services/event.service';

@Component({
  selector: 'app-my-event-list',
  templateUrl: './my-event-list.component.html',
  styleUrls: ['./my-event-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MyEventListComponent {

  constructor(public eventService: EventService) {
  }

  removeFromevent(eventDetails: EventDetails): void {
    this.eventService.removeSubscribedEvents(eventDetails);
  }
}
