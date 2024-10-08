"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// GET /api/users - Get all users
router.get("/users", (req, res) => {
    res.status(200).send(`User list will go here.`);
});
exports.default = router;
