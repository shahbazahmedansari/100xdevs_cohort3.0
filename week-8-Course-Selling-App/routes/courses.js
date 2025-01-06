const { Router } = require("express");
const { courseModel } = require("../db");

const courseRouter = Router();

courseRouter.post("/purchase", function (req, res) {

});

courseRouter.get("/preview", function (req, res) {
    res.json({
        message: "Course preview"
    });
});

module.exports = {
    courseRouter: courseRouter,
};