import { Component, OnInit } from '@angular/core';
import { ProtractorExpectedConditions } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  books = [];

  constructor() { }

  ngOnInit() {
  this.books = [
    { Title: "Harry Potter", url: "https://i.imgur.com/4FBtrG4.jpg"},
    { Title: "Mrs. Dalloway", url: "https://i.imgur.com/atn5GOf.jpg"},
    { Title: "Outliers", url: "https://i.imgur.com/hAe9xRQ.jpg"},
    { Title: "Mindset", url: "https://i.imgur.com/daY38gc.jpg"},
    { Title: "Gravity's Rainbow", url: "https://i.imgur.com/9u55U3h.jpg"}

  ];
  }



}
