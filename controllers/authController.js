const createError = require("../utils/createError")
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User, UserAddress } = require("../models");

exports.login = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

exports.signup = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      address1,
      address2,
      city,
      state,
      zip,
      phoneNumber,
    } = req.body;

    if (
      !email &&
      !phoneNumber &&
      !firstName &&
      !lastName &&
      !password &&
      !address1 &&
      !address2 &&
      !city &&
      !zip &&
      !state
    ) {
      createError("Please Fill All Box ", 400);
    }
    if (password !== confirmPassword) {
      createError("password and confirm password did not match", 400);
    }

    const isMobilePhone = validator.isMobilePhone(phoneNumber + "");
    const isEmail = validator.isEmail(email + "");

    if (!isMobilePhone && !isEmail) {
      createError("This text is not real format",400);
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      firstName,
      lastName,
      email: isEmail ? email : null,
      password: hashedPassword,
      phoneNumber: isMobilePhone ? phoneNumber : null,
    });
    const address = await UserAddress.create({
      address1,
      address2,
      city,
      state,
      zip,
    });

    const payload = {
      id: user.id,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: "7d",
    });

    res.status(201).json({token});
    
  } catch (err) {
    next(err);
  }
};
