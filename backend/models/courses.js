import mongoose from 'mongoose';

const courseSchema = mongoose.Schema(
	{
		id: { type: String, required: true },
		title: {
			type: String,
			required: true
		},
		thumbnailURL: {
			type: String,
			required: true
		},
		price: {
			type: Number,
			required: true
		},
		videoLink: []
	},
	{ timestamps: true }
);

const Course = mongoose.model('Course', courseSchema);
export default Course;
