const User = require("./user.js");
const Task = require("./task.js");

User.hasMany(Task);
Task.belongsTo(User);

module.exports = {
    User,
    Task
};