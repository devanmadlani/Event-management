import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsOverviewComponent } from './events/containers/events-overview/events-overview.component';
import { StoreModule } from '@ngrx/store';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EventCardComponent } from './shared/event-card/event-card.component';
import { MaterialModule } from './material.module';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { MyEventListComponent } from './shared/my-event-list/my-event-list.component';
import { SubscribedEventComponent } from './events/containers/subscribed-event/subscribed-event.component';
import { SubscriptionFormComponent } from './events/containers/subscription-form/subscription-form.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { UniquePipe } from './pipe/unique.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EventsOverviewComponent,
    EventCardComponent,
    MyEventListComponent,
    SubscribedEventComponent,
    SubscriptionFormComponent,
    UniquePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    PopoverModule.forRoot(),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    AlertModule,
    NoopAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
