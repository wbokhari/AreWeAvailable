import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: [ './create-poll.component.css' ]
})

export class CreatePollComponent implements OnInit {

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
    console.log("submitted to captain ");
  }

  onSubmit(f: NgForm) {
    console.log(f.value.first);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }
}