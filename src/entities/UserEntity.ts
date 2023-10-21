import { EditUserStorage } from "../storages/EditUserStorage"

export class UserEntity {
  constructor() {
    this.editUserStorage = new EditUserStorage();
  }

  editUserStorage: EditUserStorage;

  name: string;

  loadUserEntity() {
    this.name = this.editUserStorage.name
  }
}