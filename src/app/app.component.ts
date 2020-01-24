import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onNewGameEvent(event) {
    console.log(event);
    if (event.eventId % 2 === 0) {
      this.evenNumbers.push(event.eventId);
    }  else {
      this.oddNumbers.push(event.eventId);
    }
    console.log('odd: ' + this.oddNumbers);
    console.log('even: ' + this.evenNumbers);
  }
  
  onStopEvent(event){
    console.log(event);
    this.oddNumbers = [];
    this.evenNumbers = [];
  }
} 

