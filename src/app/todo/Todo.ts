export class Todo {
  public title: string;
  public description: string;
  public state: boolean;

  constructor(title: string, description: string, state: boolean) {
    this.title = title;
    this.description = description;
    this.state = false;
  }
}
