import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'pacer-ui';
  constructor(
    private router: Router,
  ){}
  onSearchRecords() {
    this.router.navigate(['/']);
  }
}
