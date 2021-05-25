export interface EventDetails {
  id: string;
  name: string;
  description: string;
  category: string;
  eventDate: Date | string;
  isSubscribed?: boolean;
}

export interface SubscribedEventDetails {
  eventDetails: EventDetails;
  name: string;
  gender: string;
  email: string;
  cityName: string;
}

export interface UserDetails {
  name: string;
  gender: string;
  email: string;
  cityName: string;
}

export type Cities = 'Rotterdam' | 'The Hague' | 'Amsterdam' | 'Utrecht' | 'Leiden';
