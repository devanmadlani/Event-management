import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribedEventComponent } from './subscribed-event.component';

describe('SubscribedEventComponent', () => {
  let component: SubscribedEventComponent;
  let fixture: ComponentFixture<SubscribedEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribedEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribedEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
