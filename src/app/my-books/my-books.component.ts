import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.scss']
})
export class MyBooksComponent implements OnInit {

  myBooks = [];
  constructor() { }

  ngOnInit() {
    this.myBooks = [
      { Title: "To Kill a Mockingbird", url: "./assets/tkam.jpg"},
      { Title: "Moby Dick", url: "./assets/moby.jpg"},
      { Title: "Odyssey", url: "./assets/od.jpg"},
      { Title: "Animal Farm", url: "./assets/af.jpg"},
      { Title: "Brave New World", url: "./assets/bnw.jpg"}
  
    ];
  }

}
