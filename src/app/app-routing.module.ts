import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsOverviewComponent } from './events/containers/events-overview/events-overview.component';
import { SubscribedEventComponent } from './events/containers/subscribed-event/subscribed-event.component';
import { SubscriptionFormComponent } from './events/containers/subscription-form/subscription-form.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: EventsOverviewComponent},
  {path: 'subscribed-event', component: SubscribedEventComponent},
  {path: 'subscription-form/:id', component: SubscriptionFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
