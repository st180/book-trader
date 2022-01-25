import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit {

  myBooks = [];
  constructor() { }

  ngOnInit() {
    this.myBooks = [
      { Title: "To Kill a Mockingbird", url: "https://i.imgur.com/YBliIhC.jpg"},
      { Title: "Moby Dick", url: "https://i.imgur.com/tPkBnrC.jpg"},
      { Title: "Odyssey", url: "https://i.imgur.com/cjcrml8.jpg"},
      { Title: "Animal Farm", url: "https://i.imgur.com/hadCMDH.jpg"},
      { Title: "Brave New World", url: "https://i.imgur.com/U0fcvCv.jpg"}

    ];
  }

}
