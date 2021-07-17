import mongoose from 'mongoose';
import fs from 'fs';
import dotenv from 'dotenv';

// Load env variables
dotenv.config();

// Load Modal
import Course from './models/courses.js';

const courses = JSON.parse(fs.readFileSync(`./mock/courses.json`, 'utf-8'));

// Connect to database
mongoose.connect(process.env.MONGO_DB_URL, {
	useCreateIndex: true,
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: true
});

const dataImporter = async () => {
	try {
		await Course.create(courses);
		console.log('Data inserted into database');
		process.exit();
	} catch (error) {
		console.log('error', error);
	}
};

const dataDestroyer = async () => {
	try {
		await Course.deleteMany();
		console.log('All data deleted from database');
		process.exit();
	} catch (error) {
		console.log('error', error);
	}
};

if (process.argv[2] === 'i') {
	dataImporter();
} else if (process.argv[2] === 'd') {
	dataDestroyer();
}
