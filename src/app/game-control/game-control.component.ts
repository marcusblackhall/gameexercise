import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output("gameStarted") gameStarted = new EventEmitter<{ counter: number }>();

  intervalObj = setInterval(()=>{},0);

  constructor() { }

  ngOnInit(): void {
  }


  onGameStarted() {

    console.log("starting the game");

    let cnt = 0;

    this.intervalObj = setInterval(() => {
      cnt++;
      this.gameStarted.emit({ counter: cnt });
      console.log("emitted with counter " + cnt);
    }, 1000)


  }

  stopTheGame(){
      clearInterval(this.intervalObj);
      console.log("game is stopped");

  }

}
