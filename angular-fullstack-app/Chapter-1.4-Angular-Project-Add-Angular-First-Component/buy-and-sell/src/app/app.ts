import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListingsPage } from './listings-page/listings-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListingsPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('buy-and-sell');
}
