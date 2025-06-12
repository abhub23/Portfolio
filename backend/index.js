"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const zod_1 = require("zod");
const Port = 8000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: '*',
}));
app.use(express_1.default.json());
const UserSchema = zod_1.z.object({
    email: zod_1.z.string().email().max(50),
    message: zod_1.z.string(),
});
const getDate = () => {
    const date = new Date().toDateString();
    const arr = date.split(' ');
    arr[0] = arr[0] + ',';
    return arr.join(' ');
};
//Server check
app.get('/', (_, res) => {
    res.json({ message: 'Server is alive' });
});
app.get('/aaa', (_, res) => {
    res.json({ message: 'Server is aaa' });
});
app.listen(Port, () => {
    console.log(`Server Listening on Port: ${Port}`);
});
