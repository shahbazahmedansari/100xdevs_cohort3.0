const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config");

function userMiddleware(req, res, next) {
    const token = req.headers.token;
    const decodedInfo = jwt.verify(token, JWT_USER_PASSWORD);

    if (decodedInfo) {
        req.userId = decodedInfo.id;
        next();
    } else {
        res.status(401).json({
            message: "Incorrect credentials",
        });
    }
}


module.exports = {
    userMiddleware: userMiddleware,
};