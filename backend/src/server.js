import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import dns from 'node:dns/promises';
import { logger } from './middleware/loggerHandler.js';
import { error } from './middleware/errorHandler.js';
import { notFound } from './middleware/notFoundHandler.js';
import { connectMongoDB } from './db/connectMongoDB.js';

dns.setServers(['8.8.8.8']);

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());
app.use(cors());
app.use(logger);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello, World!' });
});

app.use(notFound);
app.use(error);

await connectMongoDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
