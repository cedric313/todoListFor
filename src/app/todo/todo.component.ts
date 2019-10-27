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
  checked: any;

  constructor() {

  }

  ngOnInit() {
    this.listTodo.push(
      {'title': 'courses', 'description': 'je dois acheter du pain', 'state': false},
      {'title': 'ranger', 'description': 'je dois passer l\'aspirateur', 'state': false});

  }

  add() {
    this.listTodo.push(new Todo(this.inputDataTitle, this.inputDataDescription, this.inputDataState));
  }

  checkAndSort(i) {
  let longueur = this.listTodo.length;
    let objectListTodo = this.listTodo[i];
    if(!objectListTodo.state){
      this.listTodo[longueur] = this.listTodo[i];
      this.listTodo.splice(i,1);
    }
  }
}
