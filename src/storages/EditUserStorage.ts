import { makeAutoObservable } from 'mobx';

export class EditUserStorage {
  constructor() {
    makeAutoObservable(this);
  }

  name: string;
  setName = (name: string) => this.name = name;
}
