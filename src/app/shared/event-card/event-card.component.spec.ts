import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {EventCardComponent} from './event-card.component';
import {DebugElement, ElementRef} from '@angular/core';
import {By} from '@angular/platform-browser';
import {eventsMock} from "../../mock/events-mocks";


describe('EventCardComponent', () => {
    let component: EventCardComponent;
    let fixture: ComponentFixture<EventCardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EventCardComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EventCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should emit subscribe when the button is clicked', () => {
        spyOn(component.subscribeEventClick, 'emit');
        component.subscribeToEvent(eventsMock[0]);
        expect(component.subscribeEventClick.emit).toHaveBeenCalled();
    });

    it('should emit unsubscribe when the button is clicked', () => {
        spyOn(component.unsubscribeEventClick, 'emit');
        component.unsubscribeEvent(eventsMock[0]);
        expect(component.unsubscribeEventClick.emit).toHaveBeenCalled();
    });

});
