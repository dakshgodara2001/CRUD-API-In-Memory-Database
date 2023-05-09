import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import usersRoutes from './routes/users';
import { Request, Response, NextFunction } from 'express';


dotenv.config();

const app = express();
const port = Number(process.env.PORT);

app.use(bodyParser.json());
app.use(cors());

// Use user routes
app.use('/api/users', usersRoutes);

// Handle non-existing endpoints
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Resource not found' });
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
