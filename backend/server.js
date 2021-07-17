import express from 'express';
import path from 'path';
import coursesRouter from './routes/courses.js';
import usersRouter from './routes/users.js';
import dotenv from 'dotenv';
import connectDB from './config/index.js';
import { notFound, errorHandler } from './middleware/index.js';

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use('/api/v1/users', usersRouter);
app.use('/api/v1/courses', coursesRouter);

const __dirname = path.resolve();

app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '/frontend/build')));

	app.get('*', (req, res) =>
		res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
	);
} else {
	app.get('/', (req, res) => {
		res.send('Hello API is running....');
	});
}

app.use(notFound);

app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`);
});
