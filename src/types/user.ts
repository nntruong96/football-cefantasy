import { Base, CreateBaseInput } from "./base";

export interface User extends Base {
  fullName: string;
  email: string;
}

export type CreateUserInput = CreateBaseInput<User>;
export type UpdateUserInput = Partial<CreateUserInput>;
