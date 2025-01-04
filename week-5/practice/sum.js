const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.post("/sum", function (req, res) {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans: a + b,
    });
});

app.listen(3000);