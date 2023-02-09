const createError = require("../utils/createError");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
const { User, UserAddress } = require("../models");

const genToken = (payload) =>
  jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

exports.login = async (req, res, next) => {
  try {
    const { emailOrPhone, password } = req.body;

    const user = await User.findOne({
      where: {
        [Op.or]: [{ email: emailOrPhone }, { phoneNumber: emailOrPhone }],
      },
    });
    if (!user) {
      createError("invalid crerrdential", 400);
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      createError("invalid crerrdential", 400);
    }

    const token = genToken({ id: user.id });
    res.json({ token });
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
      phoneNumber,
    } = req.body;

    if (!email && !phoneNumber && !firstName && !lastName && !password) {
      createError("Please Fill All Box ", 400);
    }
    if (password !== confirmPassword) {
      createError("password and confirm password did not match", 400);
    }

    const isMobilePhone = validator.isMobilePhone(phoneNumber + "");
    const isEmail = validator.isEmail(email + "");

    if (!isMobilePhone && !isEmail) {
      createError("This text is not real format", 400);
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      firstName,
      lastName,
      email: isEmail ? email : null,
      password: hashedPassword,
      phoneNumber: isMobilePhone ? phoneNumber : null,
    });
    // const address= await UserAddress.create({
    //   address1,
    //   address2,
    //   city,
    //   state,
    //   zip,
    // });

    const token = genToken({ id: user.id });
    res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
};
