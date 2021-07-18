import Users from '../models/users.js';
import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';

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
  const user = await Users.create({
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
  const user = await Users.findById(req.user._id);
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
  const user = await Users.find({});
  if (user) {
    res.status(200).json({
      users: user,
      success: true,
      total: user.length
    });
  } else {
    res.status(404);
    throw new Error('Users not found');
  }
});

export { authUser, registerUser, userProfile, getUsers };
