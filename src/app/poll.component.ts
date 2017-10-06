import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'poll',
  templateUrl: './poll.component.html',
  styleUrls: [ './poll.component.css' ]
})

export class PollComponent implements OnInit {

  ngOnInit(): void {
  };

  isValid = false;
  opponent = "Avengers"; // This will come from captain
  displayDate = Date.now();
  displayTime = "5 PM";

  isValidForm() {
    return this.isValid;
  }

  submitAvailability(): void {
    console.log("submitted to captain");
  }
}