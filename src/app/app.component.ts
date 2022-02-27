import { Component} from '@angular/core';

enum MENU{
  USERS,BOOKS,BORROWINGS
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'LIBRARY FORM';
  menu  = MENU;
  aktMenu = MENU.USERS;

  public nastavMenu(m: MENU){
    this.aktMenu = m;
  }

  user = {id: 0, name: 'Anna Dobra', contact: 'a.dobra@example.com'}
  users: any = [];

  public addUser(): void{
    let u = {id: this.user.id, name: this.user.name, contact: this.user.contact}
    this.users.push(u);
  }

  book = {id: 0, name: 'The Hobbit', author: "J.R.R Tolkien", avial: 5}
  books: any = [];

  public addBook(): void{
    let b = {id: this.book.id, name: this.book.name, author: this.book.author, avialable: this.book.avial}
    this.books.push(b);
  }

}
