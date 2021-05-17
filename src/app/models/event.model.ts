// export interface EventDetails {
//   _id?: number;
//   title: string;
//   amount: number;
//   date?: Date;
//   subTitle?: string;
//   currency?: 'rupee' | 'euro' | null;
//   image?: EventImage;
// }
//
// export interface EventImage {
//   src: string;
//   srcOut?: string;
//   srcOn?: string;
// }


export interface EventDetails {
  id: string;
  name: string;
  description: string;
  category: string;
  eventDate: string;
  isSubscribed?: boolean;
}

export interface SubscribedEventDetails {
  eventDetails: EventDetails;
  name: string;
  gender: 'male' | 'female' | 'others';
  email: string;
  cityName: string;
}

export type Cities = 'Rotterdam' | 'The Hague' | 'Amsterdam' | 'Utrecht' | 'Leiden';
