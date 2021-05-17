import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { EventDetails } from '../../models/event.model';
import { EventService } from '../../services/event.service';


@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  @Input() eventDetails;
  @Output() subscribeEventClick: EventEmitter<string> = new EventEmitter<string>();
  @Output() unsubscribeEventClick: EventEmitter<string> = new EventEmitter<string>();

  loading = false;
  isSucessButton = false;

  constructor() {
  }

  ngOnInit(): void {

  }

  subscribeToEvent(event): void {
    this.subscribeEventClick.emit(event.id);
  }

  unsubscribeEvent(event): void {
    this.unsubscribeEventClick.emit(event.id);
  }
}
