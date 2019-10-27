export class Todo {
  public title: string;
  public description: string;
  public state: string;

  constructor(title: string, description: string, state: string) {
    this.title = title;
    this.description = description;
    this.state = state;
  }
}
