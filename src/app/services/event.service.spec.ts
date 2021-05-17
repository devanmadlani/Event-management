import { TestBed } from '@angular/core/testing';
import { EventService } from './event.service';
import {eventsMock, UserDetails} from "../mock/events-mocks";


describe('CartService', () => {
  let service: EventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should filter events by date', () => {
    service.subscribeToEvent(eventsMock[0], UserDetails);
    expect(service.allSubscribedEvents$.value.length).toBe(1);
  });

  it('should return event details based on event id', () => {
    service.allEvents$.next(eventsMock);
    const eventDetail = service.getEventDetailsById(eventsMock[0].id);
    expect(eventDetail.name).toBe('mock');
  });


  it('should remove subscribed events', () => {
    service.subscribeToEvent(eventsMock[0], UserDetails);
    service.subscribeToEvent(eventsMock[1], UserDetails);
    service.allEvents$.next(eventsMock);
    service.removeSubscribedEvents(eventsMock[1]);
    expect(service.allSubscribedEvents$.value.length).toBe(1);
  });


});
