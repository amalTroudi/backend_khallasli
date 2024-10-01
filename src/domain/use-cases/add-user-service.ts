import { AddUserParams, UserEntity } from "../entities/user"

export const ADD_USER_SERVICE = "ADD_USER_SERVICE"

export interface IAddUserService {
  addUserService: (data: AddUserParams) => Promise<UserEntity>
}