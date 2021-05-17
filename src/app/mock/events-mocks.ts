import { EventDetails } from '../models/event.model';
import { EventService } from '../services/event.service';

export const UserDetails = {
  name: 'Devan',
  gender: 'male',
  email: 'madlanidevan@gmail.com',
  cityName: 'Amsterdam'
};

export const eventsMock: EventDetails[] = [{
  id: 'MAR2021032510',
  name: 'mock',
  category: 'text',
  description: 'test',
  isSubscribed: false,
  eventDate: '2025-04-08T12:00:00+0100'
},
  {
    id: 'RET2021032513',
    name: 'test1',
    category: 'text1',
    description: 'Marcomware',
    isSubscribed: false,
    eventDate: '2022-04-08T13:00:00+0100'
  },
  {
    id: 'MAR2021040110',
    name: 'test1',
    category: 'dummy category',
    description: 'Marcomware',
    isSubscribed: false,
    eventDate: '2022-04-08T13:00:00+0100'
  },
  {
    id: 'RET2021040810',
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
