import { Component } from "@angular/core";

@Component({
  selector: "events-list",
  template: `
    <events-thumbnail (eventClick)="handleEventClicked($event)" [event]="event1"></events-thumbnail>
  `
})

export class EventsListComponent {
  event1 = {
    id: 1,
    name: "Angular Connect",
    date: "9/26/2026",
    time: "11:00 am",
    price: 599.99,
    imgURL: "./assets/images/angularconnect-shied.png",
    location:{
      address: "Kitengela Road",
      city: "Nairobi",
      country: "Kenya"
    }
  }

  handleEventClicked(data) {
    console.log('recieved:', data);
  }
}