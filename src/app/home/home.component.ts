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
    { Title: "Harry Potter", url: "./assets/hp.jpg"},
    { Title: "Mrs. Dalloway", url: "./assets/md.jpg"},
    { Title: "Outliers", url: "./assets/out.jpg"},
    { Title: "Mindset", url: "./assets/mind.jpg"},
    { Title: "Gravity's Rainbow", url: "./assets/gr.jpg"}

  ];
  }



}
