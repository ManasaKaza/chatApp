const generateToken = require("../config/generateToken");
const UserModel = require("../models/userModel");
const expressAsyncHandler = require("express-async-handler");

// Login
const loginController = expressAsyncHandler(async (req, res) => {
  const { name, password } = req.body;

  if (!name || !password) {
    res.status(400);
    throw new Error("Please provide both username and password");
  }

  const user = await UserModel.findOne({ name });

  if (user && (await user.matchPassword(password))) {
    const response = {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    };
    res.json(response);
  } else {
    res.status(401);
    throw new Error("Invalid UserName or Password");
  }
});

// Registration
const registerController = expressAsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // check for all fields
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("All necessary input fields have not been filled");
  }

  // pre-existing user
  const userExist = await UserModel.findOne({ email });
  if (userExist) {
    res.status(405);
    throw new Error("User already Exists");
  }

  // userName already Taken
  const userNameExist = await UserModel.findOne({ name });
  if (userNameExist) {
    res.status(406);
    throw new Error("UserName already taken");
  }

  // create an entry in the db
  const user = await UserModel.create({ name, email, password });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Registration Error");
  }
});

const fetchAllUsersController = expressAsyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const users = await UserModel.find(keyword).find({
    _id: { $ne: req.user._id },
  });
  res.send(users);
});

module.exports = {
  loginController,
  registerController,
  fetchAllUsersController,
};