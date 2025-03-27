import { Component } from '@angular/core';
import { BookListComponent } from "./book-list/book-list.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [BookListComponent]
})
export class AppComponent {
  title = 'Book Review App';
}