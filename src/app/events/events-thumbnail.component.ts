import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "events-thumbnail",
  template: `
  <div>
    <h1>Upcoming Events</h1>
    <hr>
  </div>
  <div class="well hoverwell thumbnail">
    <h2>{{event.name}}</h2>
    Date: {{event.date}} <br>
    Time: {{event.time}} <br>
    Price: \${{event.price}} <br>
    Location: <span> {{event.location.address}} </span> 
    <span>&nbsp;</span>
    <span>{{event.location.city}}, {{event.location.country}} </span> <br>
    <button class="btn btn-primary"(click)="handleClickMe()">CLick Me!</button>
  </div>
  `
})

export class EventsThumbnailComponent {
  @Input() event:any
  @Output() eventClick = new EventEmitter()
  handleClickMe () {
    this.eventClick.emit(this.event.name);
  }
}