const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config");

function adminMiddleware(req, res, next) {
    const token = req.headers.token;
    const decodedInfo = jwt.verify(token, JWT_ADMIN_PASSWORD);

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
    adminMiddleware: adminMiddleware
};