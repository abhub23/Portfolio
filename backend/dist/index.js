"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Port = 8000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "*"
}));
app.post('/send', (req, res) => {
    res.status(200).json({
        message: "Success"
    });
});
app.listen(Port, () => {
    console.log(`Server listening on port ${Port} `);
});
