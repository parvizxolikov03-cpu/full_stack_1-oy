// 2. Foydalanuvchilar sonini hisoblash
// User class yarating. Har yangi user yaratilganda umumiy son oshsin. static count va static
// getUserCount() yarating.

class User {
  constructor() {
    User.count++;
  }
  static count = 0;

  static getUserCount() {
    return User.count;
  }
}

const user1 = new User();
const user2 = new User();
const user3 = new User();

console.log(User.getUserCount());
