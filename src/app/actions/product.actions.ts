import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store';


export const SUBSCRIBE_EVENT = '[EVENT] Subscribe';
export const UNSUBSCRIBE_EVENT = '[EVENT] Unsubscribe';
export const SET_ALL_EVENT_DETAILS = '[EVENT] allEvents';

export class SubscribeEvent implements Action {
    readonly type = SUBSCRIBE_EVENT;

    constructor(public payload) {}
}

export class RemoveSubscribedEvent implements Action {
    readonly type = UNSUBSCRIBE_EVENT;

    constructor(public payload) {}
}


export type Actions = SubscribeEvent | RemoveSubscribedEvent;
