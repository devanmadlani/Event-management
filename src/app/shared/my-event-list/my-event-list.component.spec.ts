import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MyEventListComponent } from './my-event-list.component';
import { EventService } from '../../services/event.service';
import { EventServiceMock, eventsMock } from '../../mock/events-mocks';


describe('MyEventListComponent', () => {
  let component: MyEventListComponent;
  let fixture: ComponentFixture<MyEventListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyEventListComponent],
      providers: [{provide: EventService, useClass: EventServiceMock}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call removeSubscribedEvents', () => {
    const spySetAllEvents = spyOn(component.eventService, 'removeSubscribedEvents');
    component.removeFromevent(eventsMock[0]);
    expect(spySetAllEvents).toHaveBeenCalled();
  });

});
