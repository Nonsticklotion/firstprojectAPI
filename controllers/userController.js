const { UserAddress } = require("../models");
const createError = require("../utils/createError");
exports.getMe = (req, res) => {
  res.json({ user: req.user });
};

exports.getAddress = async (req, res, next) => {
  try {
    // const { userid } = req.params;
    const youraddress = await UserAddress.findAll({
      where: {
        user_id: req.user.id,
      },
    });

    res.json({ youraddress: youraddress });
  } catch (err) {
    next(err);
  }
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
      user_id: req.user.id,
    });
    res.status(201).json({ add1, add2, province, district, postalCode });
  } catch (err) {
    next(err);
  }
};

exports.editAddress = async (req, res, next) => {
  try {
    const { add1, add2, province, district, postalCode } = req.body;
    if (!add1 && !add2 && !province && !district && !postalCode) {
      createError("pls fill all box", 400);
    }
    const userAdd = await UserAddress.update(
      {
        add1: add1,
        add2: add2,
        province: province,
        district: district,
        postalCode: postalCode,
      },
      {
        where: {
          user_id: req.user.id,
        },
      }
    );
    const yournewaddress = await UserAddress.findAll({
      where: {
        user_id: req.user.id,
      },
    });
    res.status(201).json({ userNewAddress: yournewaddress });
  } catch (err) {
    next(err);
  }
};
