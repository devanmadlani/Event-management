# EventPlanner

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.5.

# Summary

Users can see all the upcoming events.

User can filter events

Users can subscribe to an events.

User can unsubscribe to events

User can see list of subscribed events


# Demo

Click here for the demo -> [Event Management](https://devan-8fa66.firebaseapp.com/)



# App sturcture


**Event Overview Component** - this component contains the list of all the upcoming events with the filteration functionality

**Subscribed Event component** - Contains all the list all events that are subscribed by the users, uers can also unsubscribe to an event

**Subscription form component** - Form is used to submit the details and also contains the description of the selected event.




**Event Service** - All the reusabe logic related to events are on the Event Service below are the list of functions.

**subscribeToEvent()** - this function is called when user subscribes to the event, the details are added on an behavior subject which is subscribed on all the components.

**removeSubscribedEvents()** - Removes the selected event from the list of events subscribed, here allSubscribedEvents behavior subject is also updated

**setAllEvents()** - this function is called on load of the application, sets all the events that needs to be listed on the overview screen

**getEventDetailsById()** - returns the event details based on the id.




**Unique Pipe** - Unique pipe is used to convert an array to list unique items, this pipe is used on Event overview component to dilplay list of Category which chould unique elements on the Categoy filter dropdown 



**Shared Folder** contains the reusable components like cards and list of events


# Build

Run ng build to build the project. The build artifacts will be stored in the dist/ directory. Use the --prod flag for a production build.


# Running unit tests

Run ng test to execute the unit tests via Karma ng test watch to watch the changes in the unit testing while you code them. This project will also generate the code coverage which is under coverage folder.



# Automation Testing 

Run cypress open to execute the end-to-end tests via Cypress. The application shuld be running before executing Automation 



# Can be improved

Add more unit test for Html

Improve Notifications



# e2e testing 
 
![alt e2e testing](https://github.com/devanmadlani/Event-management/blob/main/src/assets/automation.gif?raw=true)


# Unit testing coverage report

![alt Unit testing coverage report](https://github.com/devanmadlani/Event-management/blob/main/src/assets/unit-testing-report.png?raw=true)

![alt Unit testing coverage report](https://github.com/devanmadlani/Event-management/blob/main/src/assets/Unit-testing.png?raw=true)




