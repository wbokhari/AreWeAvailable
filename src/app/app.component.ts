import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
   <h1>{{title}}</h1>
   <nav>
     <a routerLink="/dashboard">Dashboard</a>
     <a routerLink="/heroes">Heroes</a>
     <a routerLink="/poll">Submit Poll</a>
     <a routerLink="/create-poll">Create Poll</a>
   </nav>
   <router-outlet></router-outlet>
 `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Team Availability';
}
