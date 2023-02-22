import express, { Request, Response } from 'express';

const PORT = process.env.PUBLIC_PORT || 4002;

// Initialize application
const app = express();

app.get('/app2', (req: Request, res: Response) => {
    res.send('Hello World from app 2');
});

// Start server 
app.listen(PORT, () => {
    console.log(`App2 Server started on port ${PORT}`);
});

// Go to your lab url - https://your-lab-url.ineuron.app:4000 to see the output