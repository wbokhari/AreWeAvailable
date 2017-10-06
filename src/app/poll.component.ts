import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'poll',
  templateUrl: './poll.component.html',
  styleUrls: [ './poll.component.css' ]
})

export class PollComponent implements OnInit {

  ngOnInit(): void {
  };

  opponent = "Avengers"; // This will come from captain
  displayDate = Date.now();
  displayTime = "5 PM";

}