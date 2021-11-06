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
  arrCount: Date[] = [];

  onClickDisplay() {
    this.isDisplay = !this.isDisplay;
    this.arrCount.push(new Date());
  }

  getColor(num) {
    if(num >= 5) {
      return "blue";
    }
  }
}
