import { generateId } from "../Utils/generateId";

export class House {
  constructor(data) {
    this.id = generateId();
    this.title = data.title;
  }
}
