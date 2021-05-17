import { Component, OnDestroy, OnInit } from '@angular/core';
import * as  allEventsJsonData from '../../data/allEvents.json';
import { EventService } from '../../../services/event.service';
import { EventDetails } from '../../../models/event.model';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-events-overview',
  templateUrl: './events-overview.component.html',
  styleUrls: ['./events-overview.component.scss']
})
export class EventsOverviewComponent implements OnInit, OnDestroy{

  allEvents: EventDetails[] = [];
  filterValue: EventDetails[] = [];
  sortOrder = false;
  sortByDate = false;
  filterDate;
  #destory$ = new Subject<boolean>()

  constructor(public eventService: EventService, public router: Router) {
  }

  ngOnInit(): void {
    this.eventService.setAllEvents();
    this.eventService.allEvents$.pipe(takeUntil(this.#destory$)).subscribe(events => {
      this.allEvents = events;
      this.filterValue = this.allEvents;
    });
  }

  subscribeToEvent(event): void {
    this.router.navigate(['/subscription-form', event]);
  }

  unsubscribeToEvent(eventId: string): void {
    const updatedEvent = this.eventService.getEventDetailsById(eventId);
    this.eventService.removeSubscribedEvents(updatedEvent);
  }


  filterByText(textToFilter: string): void {
    this.filterDate = '';
    this.allEvents = this.filterValue;
    this.allEvents = this.allEvents.filter(i => i.name.toLowerCase().indexOf(textToFilter.toLowerCase()) !== -1);
  }

  filterByDate(dateToFilter: string): void {
    this.allEvents = this.filterValue;
    this.allEvents = this.allEvents.filter(i => new Date(i.eventDate).getTime() === new Date(dateToFilter).getTime());
  }

  filterByCategory(categoryToFilter): void {
    this.filterDate = '';
    this.allEvents = this.filterValue;
    if (!!categoryToFilter.target.value) {
      this.allEvents = this.allEvents.filter(i => i.category.toLowerCase() === categoryToFilter.target.value.toLowerCase());
    }
  }

  sortData(): void {
    if (this.sortOrder) {
      this.allEvents = this.allEvents.sort((first: EventDetails, second: EventDetails) => (second.name > first.name ? -1 : 1));
    } else {
      this.allEvents = this.allEvents.sort((first: EventDetails, second: EventDetails) => (second.name > first.name ? 1 : -1));
    }
    this.sortOrder = !this.sortOrder;
  }

  sortDataByDate(): void {
    this.sortByDate = !this.sortByDate;
    this.allEvents = this.allEvents.sort((first: EventDetails, second: EventDetails) => {
      const item = this.sortByDate ? (new Date(second.eventDate).getTime() - new Date(first.eventDate).getTime())
        : (new Date(first.eventDate).getTime() - new Date(second.eventDate).getTime());
      return item;
    });
  }

  ngOnDestroy(): void {
    this.#destory$.next();
    this.#destory$.unsubscribe();
  }

}
