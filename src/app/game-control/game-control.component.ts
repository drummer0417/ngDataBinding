import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() gameClickEvent = new EventEmitter<{eventId: number}>();
  @Output() stopGameEvent = new EventEmitter<void>();

  eventNumber = 0;
  timer = null;

  constructor() { }

  ngOnInit() {
  }
    
  onStartGame() {
    this.onStopGame();
    this.timer = setInterval(() => { 
      this.eventNumber++;
      this.gameClickEvent.emit({eventId: this.eventNumber});
     }, 1000);
  }

  onStopGame() {
    if (this.timer) {
      this.eventNumber = 0;
      clearInterval(this.timer);
      this.stopGameEvent.emit();
    }
  }
}