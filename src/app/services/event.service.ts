import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {EventDetails, SubscribedEventDetails, UserDetails} from '../models/event.model';
import * as allEventsJsonData from '../events/data/allEvents.json';


@Injectable({
    providedIn: 'root'
})
export class EventService {
    public allEvents: BehaviorSubject<EventDetails[]> = new BehaviorSubject<EventDetails[]>([]);
    public allSubscribedEvents: BehaviorSubject<SubscribedEventDetails[]> = new BehaviorSubject<SubscribedEventDetails[]>([]);

    subscribeToEvent(eventDetails: EventDetails, userDetails: UserDetails): void {
        eventDetails.isSubscribed = true;
        const subscribedEventDetails: SubscribedEventDetails[] = this.allSubscribedEvents.getValue();
        subscribedEventDetails.push({eventDetails, ...userDetails});
        this.allSubscribedEvents.next(subscribedEventDetails);
    }

    getEventDetailsById(eventId): EventDetails {
        return this.allEvents.value.find((eventDetail) => (eventDetail.id === eventId));
    }

    removeSubscribedEvents(eventDetails: EventDetails) {
        const data = this.allSubscribedEvents.value.filter((el) => el['eventDetails'].id !== eventDetails.id);
        const updatedEventDetails: EventDetails[] = this.allEvents.value;
        const eventIndex = updatedEventDetails.findIndex((event) => event.id === eventDetails.id);
        updatedEventDetails[eventIndex].isSubscribed = false;
        this.allEvents.next(updatedEventDetails);
        this.allSubscribedEvents.next(data);
    }

    setAllEvents(): void {
        if (this.allEvents.value.length > 1) {
            return;
        }
        const eventsDetails: { events: EventDetails[] } = (allEventsJsonData as any).default;
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



