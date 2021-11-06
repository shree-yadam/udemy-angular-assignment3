import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment3';
  paragraph: string = "Secret Password = tuna";
  isDisplay: boolean = false;
  arrCount: number[] = [];

  onClickDisplay() {
    this.isDisplay = !this.isDisplay;
    if(this.arrCount.length === 0) {
      this.arrCount.push(1);
    } else {
      this.arrCount.push(this.arrCount[this.arrCount.length - 1] + 1);
    }
  }

  getColor(num) {
    if(num >= 5) {
      return "blue";
    }
  }
}
