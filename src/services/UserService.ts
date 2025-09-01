import { User } from '../models/User';

export const userService = {
  async getUsers(): Promise<User[]> {
    return User.scope('withPassword').findAll();
  },

  // async updateUser(id: string, user: User) {
  //   return User.update(user, { where: { id } });
  // },

  // async deleteUser(id: string) {
  //   return User.destroy({ where: { id } });
  // },
};
