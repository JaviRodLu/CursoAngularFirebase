import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Header } from "./shared/header/header";
import { Footer } from "./shared/footer/footer";
import { Pageinfo } from './services/pageinfo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(public _pageinfo: Pageinfo) {
    
  }
}
