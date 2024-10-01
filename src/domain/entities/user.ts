export type UserEntity = {
   
  id: string | number;
  name: string;
  email: string;
  password: string;
  accessToken?: string;
  roles: String[]
  
}
// export type UserRoleModel = [
//   {
//       role: string
//   }
// ]

export type AddUserParams = Omit<UserEntity, 'id'>
