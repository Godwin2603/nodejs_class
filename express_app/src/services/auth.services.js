const UserService = require("./user.service");
const userService = new UserService();

//This can later be replaced with a db call
function registerUser({ email, name, password }) {
  if (!name || !email || !password) {
    return { success: "False", message: "Failed" };
  }
  return userService.create({ email, name, password });
}
module.exports = { registerUser };
