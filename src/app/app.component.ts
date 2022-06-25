import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  evenList: number[] = [];
  oddList: number[] = [];


  onGameStarted(gameData: { counter: number }) {

    console.log("Received a count of " + gameData.counter);

    let currCnt = gameData.counter;
    if (currCnt % 2 == 0) {
      // create Even component
      console.log("create even ");
      this.evenList.push(gameData.counter);
    } else {
      //create Odd component
      console.log("create odd ");
      this.oddList.push(gameData.counter);
    }


  }



}
