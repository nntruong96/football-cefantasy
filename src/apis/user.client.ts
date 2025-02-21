import { User } from "../types";
import { CrudClient } from "./crud.client";

export class UserClient extends CrudClient<User> {
  constructor() {
    super({ resource: "users" });
  }
}
