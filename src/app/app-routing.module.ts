import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyBooksComponent } from './my-books/my-books.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'mybooks', component: MyBooksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
