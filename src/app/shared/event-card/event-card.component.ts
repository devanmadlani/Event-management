import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  @Input() eventDetails;
  @Output() subscribeEventClick: EventEmitter<string> = new EventEmitter<string>();
  @Output() unsubscribeEventClick: EventEmitter<string> = new EventEmitter<string>();
  isSucessButton = false;

  constructor() {
  }

  ngOnInit(): void {

  }

  subscribeToEvent(id): void {
    this.subscribeEventClick.emit(id);
  }

  unsubscribeEvent(id): void {
    this.unsubscribeEventClick.emit(id);
  }
}
