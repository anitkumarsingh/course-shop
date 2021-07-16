import Users from '../models/users.js';
import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import User from '../models/users.js';

const authUser = asyncHandler(async (req, res, next) => {
	const { email, password } = req.body;
	const user = await Users.findOne({ email });
	if (user && (await user.matchPassword(password))) {
		res.json({
			id: user._id,
			email: user.email,
			token: generateToken(user._id)
		});
	} else {
		res.status(401);
		throw new Error('Invalid email or password');
	}
});

// registration of user
const registerUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;
	const userExists = await Users.findOne({ email });
	if (userExists) {
		res.status(400);
		throw new Error('User already exists');
	}
	const user = await User.create({
		password,
		email
	});
	if (user) {
		res.status(201).json({
			id: user._id,
			email: user.email,
			token: generateToken(user._id)
		});
	} else {
		res.status(400);
		throw new Error('Invalid user data');
	}
});

// user profile
const userProfile = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id);
	if (user) {
		res.json({
			id: user._id,
			email: user.email
		});
	} else {
		res.status(404);
		throw new Error('User not found');
	}
});

// Get all users
const getUsers = asyncHandler(async (req, res, next) => {
	const user = await User.find({});
	const registeredUsers = await User.find({ isRegisted: true }).countDocuments();
	const activeUsers = await User.find({ isActive: true }).countDocuments();
	if (user) {
		res.status(200).json({
			users: user,
			success: true,
			total: user.length,
			registeredUsers,
			activeUsers
		});
	} else {
		res.status(404);
		throw new Error('Users not found');
	}
});

export { authUser, registerUser, userProfile, getUsers };
