import { Action } from '@ngrx/store'
import * as ProductActions from './../actions/product.actions';
import { EventDetails } from '../models/event.model';

export function reducer(state: EventDetails[] = [], action: ProductActions.Actions) {

    switch (action.type) {

        case ProductActions.SUBSCRIBE_EVENT:
            return [...state, action.payload];

        case ProductActions.UNSUBSCRIBE_EVENT:
            const eventData = action.payload;
            const data = state.filter((el) => el.id !== eventData.id);
            data.forEach(obj => {
              if (obj['eventDetails'].id === eventData.id) {
                obj.isSubscribed = false;
              }
            });
            return data;


        default:
            return state;
    }
}
