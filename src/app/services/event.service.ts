import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ProductActions from './../actions/product.actions';
import { EventDetails, SubscribedEventDetails } from '../models/event.model';
import * as allEventsJsonData from '../events/data/allEvents.json';


@Injectable({
  providedIn: 'root'
})
export class EventService {
  public allEvents: BehaviorSubject<EventDetails[]> = new BehaviorSubject<EventDetails[]>([]);
  public allSubscribedEvents: BehaviorSubject<SubscribedEventDetails[]> = new BehaviorSubject<SubscribedEventDetails[]>([]);

  constructor() {
  }

  subscribeToEvent(eventDetails: EventDetails, userDetails) {
    eventDetails.isSubscribed = true;
    const subObject: SubscribedEventDetails[] = this.allSubscribedEvents.getValue();
    subObject.push({eventDetails, ...userDetails});
    this.allSubscribedEvents.next(subObject);
  }

  getEventDetailsById(eventId): EventDetails {
    return this.allEvents.getValue().find((eventDetail) => (eventDetail.id === eventId));
  }

  removeSubscribedEvents(eventDetails: EventDetails) {
    const data = this.getAllSubscribedEvents().filter((el) => el['eventDetails'].id !== eventDetails.id);
    const updatedEventDetails: EventDetails[] = this.allEvents.getValue();
    updatedEventDetails.forEach(obj => {       //change to find
      if (obj.id === eventDetails.id) {
        obj.isSubscribed = false;
      }
    });
    this.allEvents.next(updatedEventDetails);
    this.allSubscribedEvents.next(data);
  }

  getAllSubscribedEvents(): SubscribedEventDetails[] { // REMOVE FUNCTION
    return this.allSubscribedEvents.getValue();
  }

  setAllEvents(): void {
    if (this.allEvents.getValue().length === 0) {
      const eventsDetails = (allEventsJsonData as any).default;
      if (eventsDetails.events) {
        const updatedEventsDetails: EventDetails[] = eventsDetails.events.map(obj => ({
          ...obj,
          eventDate: new Date(obj.eventDate),
          isSubscribed: false
        }));
        this.allEvents.next(updatedEventsDetails);
      }
    }
  }
}



