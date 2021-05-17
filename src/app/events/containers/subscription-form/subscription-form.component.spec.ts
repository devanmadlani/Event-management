import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionFormComponent } from './subscription-form.component';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { EventService } from '../../../services/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EventServiceMock } from '../../../mock/events-mocks';
import { EventsOverviewComponent } from '../events-overview/events-overview.component';


const ActivatedRouteMock = {params: of({id: 'dummyId'})};

function patchFormValue(component) {
  component.userDetailsForm.patchValue({
    name: 'dummy',
    email: 'dummy@gmail.com',
    dateOfBirth: '24/1/1990',
    gender: 'male',
    cityName: 'amsterdam'
  });
}

describe('SubscriptionFormComponent', () => {
  let component: SubscriptionFormComponent;
  let fixture: ComponentFixture<SubscriptionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubscriptionFormComponent],
      imports: [RouterTestingModule.withRoutes([{path: 'home', component: EventsOverviewComponent}])],
      providers: [{provide: ActivatedRoute, useValue: ActivatedRouteMock},
        {provide: EventService, useClass: EventServiceMock}]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionFormComponent);
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

  it('should get eventId from params on init', () => {
    component.ngOnInit();
    expect(component.route.params).not.toBeNull();
  });

  it('should init selectedEventDetails on init', () => {
    component.ngOnInit();
    component.route.params.subscribe((prams) => {
      expect(component.selectedEventDetails).toBeDefined();
    });
  });

  it('should not subscribe to event if form is invalid', () => {
    const userForm = component.userDetailsForm;
    userForm.controls.name.setValue(null);
    expect(userForm.valid).toBeFalse();
  });

  it('should subscribe to event if form is invalid', () => {
    patchFormValue(component);
    expect(component.userDetailsForm.valid).toBeTruthy();
  });

  it('should subscribe to event on form submit', () => {
    patchFormValue(component);
    component.submitted = true;
    const spySubscribeToEvent = spyOn(component.eventService, 'subscribeToEvent');
    component.onSubmit();
    expect(spySubscribeToEvent).toHaveBeenCalled();
  });

});
