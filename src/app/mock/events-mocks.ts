import { EventDetails } from '../models/event.model';
import { EventService } from '../services/event.service';

export const eventsMock: EventDetails[] = [{
  id: '1',
  name: 'mock',
  category: 'text',
  description: 'test',
  isSubscribed: false,
  eventDate: '2025-04-08T12:00:00+0100'
},
  {
    id: '2',
    name: 'test1',
    category: 'text1',
    description: 'Marcomware',
    isSubscribed: false,
    eventDate: '2022-04-08T13:00:00+0100'
  },
  {
    id: '2',
    name: 'test1',
    category: 'dummy category',
    description: 'Marcomware',
    isSubscribed: false,
    eventDate: '2022-04-08T13:00:00+0100'
  },
  {
    id: '2',
    name: 'test1',
    category: 'text1',
    description: 'Marcomware',
    isSubscribed: false,
    eventDate: '2022-04-08T13:00:00+0100'
  }
  ];


export class EventServiceMock extends EventService {


  getEventDetailsById(eventId): EventDetails {
    return eventsMock[0];
  }

  removeSubscribedEvents(eventDetails: EventDetails): void {
  }

  // const removeSubscribedEvents = (eventDetails: EventDetails) => {
  // }
}
