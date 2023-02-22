"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = process.env.PUBLIC_PORT || 4001;
// Initialize application
const app = (0, express_1.default)();
app.get('/app1', (req, res) => {
    res.send('Hello World');
});
// Start server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
// Go to your lab url - https://your-lab-url.ineuron.app:4000 to see the output
