const JWT = require("jsonwebtoken");
const { hashPassword, comparePassword } = require("../helpers/authHelper");
const userModel = require("../models/userModel");
var { expressjwt: jwt } = require("express-jwt");

//app middleware
const requireSignIn = jwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
});

const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name) {
      return res.status(400).send({
        sucess: false,
        message: "name is required",
      });
    }
    if (!email) {
      return res.status(400).send({
        sucess: false,
        message: "email is required",
      });
    }
    if (!password || password.length < 6) {
      return res.status(400).send({
        sucess: false,
        message: "password is required and minimum 6 digits required",
      });
    }
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(500).send({
        sucess: false,
        message: "user already register with this email",
      });
    }

    const hashedPassword = await hashPassword(password);

    const user = await userModel({
      name,
      email,
      password: hashedPassword,
    }).save();

    return res.status(201).send({
      sucess: true,
      message: "Registration sucessfull please login",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "error in Register Api",
      error,
    });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "please provide email and password",
      });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).send({
        success: false,
        message: "User not found",
      });
    }

    //match password
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(500).send({
        success: false,
        message: "Invalid username or password",
      });
    }

    //jwt token
    const token = await JWT.sign({_id:user._id},process.env.JWT_SECRET,{
      expiresIn:"7d"
    })

    //password undefined
    user.password = undefined;
    res.status(200).send({
      success: true,
      message: "login sucessfully",
      token,
      user,
    });
  } catch (error) {
    return res.status(500).send({
      sucess: false,
      message: "error in login Api",
      error,
    });
  }
};
//update user
const updateUserController = async (req, res) => {
  try {
    const { name, password, email } = req.body;
    //user find
    const user = await userModel.findOne({ email });
    //password validate
    if (password && password.length < 6) {
      return res.status(400).send({
        success: false,
        message: "Password is required and should be 6 character long",
      });
    }
    const hashedPassword = password ? await hashPassword(password) : undefined;
    //updated user
    const updatedUser = await userModel.findOneAndUpdate(
      { email },
      {
        name: name || user.name,
        password: hashedPassword || user.password,
      },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Profile Updated Please Login",
      updatedUser
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In User Update Api",
      error,
    });
  }
};


module.exports = {requireSignIn, registerController, loginController, updateUserController };
