import {Component, OnInit} from '@angular/core';
import {Todo} from "./Todo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public listTodo: Todo[] = [];
  private inputDataTitle;
  private inputDataDescription;
  private inputDataState;

  constructor() {

  }

  ngOnInit() {
    this.listTodo.push(
      {'title': 'courses', 'description': 'je dois acheter du pain', 'state': 'à faire'},
      {'title': 'ranger', 'description': 'je dois passer l\'aspirateur', 'state': 'à faire'});
  }

  add() {
    this.listTodo.push(new Todo(this.inputDataTitle, this.inputDataDescription, this.inputDataState));
  }

}
