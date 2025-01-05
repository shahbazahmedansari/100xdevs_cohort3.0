const express = require("express");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const { authMiddleware, JWT_SECRET } = require("./auth.js");

const app = express();

app.use(express.json());

app.post("/signup", async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({
        username: username,
        password: password,
        name: name,
    });

    res.json({
        messsage: "You have signed up",
    });
});

app.post("/signin", async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const user = await UserModel.findOne({
        username: username,
        password: password,
    });

    console.log(user);

    if (user) {
        const token = jwt.sign({
            id: user._id.toString(),
        }, JWT_SECRET);
        res.json({
            token,
        });
    } else {
        res.status(403).json({
            message: "Incorrect credentials",
        });
    }
});

app.post("/todo", authMiddleware, async function (req, res) {
    const title = req.body.title;
    const done = req.body.done;
    const userId = req.userId;

    await TodoModel.create({
        title: title,
        done: done,
        userId: userId,
    });


    res.json({
        message: "Todo added",
    });
});

app.get("/todos", authMiddleware, async function (req, res) {
    const userId = req.userId;
    const todos = await TodoModel.find({
        userId: userId,
    });

    res.json({
        todos,
    });
});

app.listen(3000);