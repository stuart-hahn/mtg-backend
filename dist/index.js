"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
dotenv_1.default.config();
console.log(process.env.MONGO_URI);
(0, db_1.default)();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
// middleware
app.use(express_1.default.json());
app.use("/api/users", userRoutes_1.default);
// home route
app.get("/", (req, res) => {
    res.send("This is going to be an amazing MTG app.");
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}. You better go catch it!`);
});
