const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:shahbaz7890@cluster0.cktkc6b.mongodb.net/todos_app");

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const User = new Schema({
    username: {
        type: String,
        unique: true,
    },
    password: String,
    name: String,
});

const Todo = new Schema({
    title: String,
    done: Boolean,
    userId: ObjectId,
});

const UserModel = mongoose.model('users', User);
const TodoModel = mongoose.model('todos', Todo);

module.exports = {
    UserModel,
    TodoModel
}

