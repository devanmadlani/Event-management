# EventPlanner

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.5.

# Summary

App Displays list of upcoming events, users can subscribe to the event by filling the form

# Demo

Click here for the demo -> [Event Management](https://devan-8fa66.firebaseapp.com/)

# App sturcture


**Event Overview Component** - this component contains the list of all the uncoming events with the filteration functionality

**Subscribed Event component** - Contains all the list all events that are subscribed by the users, uers can also unsubscribe to an event

**Subscription form component** - Form is used to submit the details and also contains the description of the selected event.




Event Service - All the reusabe logic related to events are on the Event Service below are the list of functions.

subscribeToEvent() - this function is called when user subscribes to the event, the details are added on an behavior subject which is subscribed on all the components.

**removeSubscribedEvents()** - Removes the selected event from the list of events subscribed, here allSubscribedEvents behavior subject is also updated

**setAllEvents()** - this function is called on load of the application, sets all the events that needs to be listed on the overview screen

**getEventDetailsById()** - returns the event details based on the id.




**Unique Pipe** - Unique pipe is used to convert an array to list unique items, this pipe is used on Event overview component to dilplay list of Category which chould unique elements on the Categoy filter dropdown 



**Shared Folder** contains the reusable components like cards and list of events


# Build

Run ng build to build the project. The build artifacts will be stored in the dist/ directory. Use the --prod flag for a production build.


# Running unit tests

Run ng test to execute the unit tests via Karma ng test watch to watch the changes in the unit testing while you code them. This project will also generate the code coverage which is under coverage folder.

# Can be improved

Add more unit test for Html
Notifications




