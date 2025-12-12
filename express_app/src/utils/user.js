class user {
  users = new Map();
  add(name, email, password) {
    this.users.set(email, { name, email, password });
  }
  remove(email) {
    return this.users.delete(email);
  }
  get(email) {
    return this.users.get(email);
  }
  update(email, newName, newPassword) {
    if (this.users.has(email)) {
      let currentUser = this.users.get(email);
      if (newName !== undefined) {
        currentUser.name = newName;
      }
      if (newPassword !== undefined) {
        currentUser.password = newPassword;
      }

      return currentUser;
    } else {
      return null;
    }
  }
}
module.exports = user