const { Router } = require("express");
const { userMiddleware } = require("../middleware/user");
const { Todo } = require("../db/index");
const todoRouter = Router();

todoRouter.post("/", userMiddleware, async (req, res) => {
    try {
        const { title, done } = req.body;
        const userId = req.userId;

        const newTodo = await Todo.create({
            title,
            done,
            userId,
        });

        res.json({
            message: "Todo added successfully",
            todoId: newTodo._id,
        });
    } catch (error) {
        req.status(500).json({
            message: "Internal server error",
        });
    }
});

todoRouter.put("/", userMiddleware, async (req, res) => {
    try {
        const { title, done } = req.body;
        const userId = req.userId;

        const updatedTodo = await Todo.updateOne({
            userId: userId,
        }, {
            title: title,
            done: done,
        });

        res.json({
            message: "Todo updated successfully",
            todoId: updatedTodo._id,
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
        });
    }
});

todoRouter.get("/", userMiddleware, async (req, res) => {
    try {
        const userId = req.userId;
        const todos = await Todo.find({
            userId: userId,
        });

        if (!todos) {
            res.status(404).json({
                message: "No todos found",
            });
        }

        res.json({
            todos,
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
        });
    }
});


module.exports = {
    todoRouter,
};