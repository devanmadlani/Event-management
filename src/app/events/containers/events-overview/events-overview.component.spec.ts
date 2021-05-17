import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsOverviewComponent } from './events-overview.component';
import { RouterTestingModule } from '@angular/router/testing';
import { EventService } from '../../../services/event.service';
import { EventDetails } from '../../../models/event.model';
import { EventServiceMock, eventsMock } from '../../../mock/events-mocks';
import { UniquePipe } from '../../../pipe/unique.pipe';



describe('EventsOverviewComponent', () => {
  let component: EventsOverviewComponent;
  let fixture: ComponentFixture<EventsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventsOverviewComponent, UniquePipe],
      imports: [RouterTestingModule],
      providers: [{provide: EventService, useClass: EventServiceMock}]
    })
      .compileComponents();
  });

  afterEach(() => {
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call setAllEvents on init', () => {
    const spySetAllEvents = spyOn(component.eventService, 'setAllEvents');
    component.ngOnInit();
    expect(spySetAllEvents).toHaveBeenCalled();
  });

  it('should init all events', () => {
    component.eventService.allEvents.subscribe(events => {
      expect(component.allEvents.length > 0).toBeTruthy();
    });
    component.eventService.allEvents.next(eventsMock);
  });

  it('should navigate to subscription form on subscribe', () => {
    const spySubscribeToEvent = spyOn(component.router, 'navigate');
    component.subscribeToEvent('eventId');
    expect(spySubscribeToEvent).toHaveBeenCalledWith(['/subscription-form', 'eventId']);
  });

  it('should call getEventDetailsById on unsubscribeToEvent event', () => {
    const spyGetEventById = spyOn(component.eventService, 'getEventDetailsById');
    component.unsubscribeToEvent('test');
    expect(spyGetEventById).toHaveBeenCalledWith('test');
  });

  it('should call removeSubscribedEvents on unsubscribeToEvent event', () => {
    const spyGetEventById = spyOn(component.eventService, 'removeSubscribedEvents');
    component.unsubscribeToEvent('test');
    expect(spyGetEventById).toHaveBeenCalledWith(eventsMock[0]);
  });

  it('should filter events by text', () => {
    component.filterValue = eventsMock;
    component.filterByText('mock');
    expect(component.allEvents[0].name).toBe('mock');
  });

  it('should filter events by date', () => {
    component.filterValue = eventsMock;
    component.filterByDate('2025-04-08T12:00:00+0100');
    expect(component.allEvents.length).toBe(1);
  });

  it('should filter events by category', () => {
    component.filterValue = eventsMock;
    component.filterByCategory({target: {value: 'dummy category'}});
    expect(component.allEvents.length).toBe(1);
  });


});
