const { UserAddress } = require("../models");
const createError = require("../utils/createError");
exports.getMe = (req, res) => {
  res.json({ user: req.user });
};

exports.createAddress = async (req, res, next) => {
  try {
    const { add1, add2, province, district, postalCode } = req.body;
    if (!add1 && !add2 && !province && !district && !postalCode) {
      createError("pls fill all box", 400);
    }
    const userAdd = await UserAddress.create({
      add1,
      add2,
      province,
      district,
      postalCode,
      user_id : req.user.id
    });
    res.status(201).json( "useraddress create" );
  } catch (err) {
    next(err);
  }
};
