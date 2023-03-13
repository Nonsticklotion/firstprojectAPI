const { UserAddress, OrderItem, User, Order } = require("../models");
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

exports.createOrderItems = async (req, res, next) => {
  try {
    const products = req.body.products;
    const userId = req.user.id;
    const order = req.body.order;

    const totalPrice = products.rreduce((total, product) => {
      return total + product.amount * product.price;
    }, 0);

    await sequelize.transaction(async (t) => {
      const createdOrder = await Order.create(
        {
          picture_money: order.picture_money || null,
          status: 0,
          all_money: totalPrice,
        },
        { transaction: t }
      );

      for (const product of products) {
        const dbProduct = await product.findByPk(product.id);

        if (!dbProduct || dbProduct.amountLeft < product.amount) {
          throw new Error("Product not found or not enough in stock");
        }

        const orderItem = await OrderItem.create(
          {
            amount: product.amount,
            totalPrice: dbProduct.price * product.amount,
            order_date: new Date(),
            product_id: product.id,
            order_id: createdOrder.id,
            user_id: userId,
          },
          { transaction: t }
        );
        await dbProduct.update(
          {
            amountLeft: dbProduct.amountLeft - product.amount,
          },
          { transaction: t }
        );
      }
    });

    res.status(201).send('Order created successfully');
  } catch (err) {
    next(err);
  }
};
exports.getOrderItems = async (req, res, next) => {
  try {
    const getOrderItems = await OrderItem.findAll({
      where: { user_id: req.user.id, status: false },
    });
    const getOrder = await Order.findOne({
      where: { order_id: getOrderItems.order_id },
    });

    const allOrder = getOrderItems.map((x) => ({
      id: x.id,
      amount: x.amount,
      totalPrice: x.totalprice,
      status: x.status,
      order_date: x.order_date,
      product_id: {
        id: x.product_id,
      },
      order_id: {
        order_id: x.order_id,
      },
      user_id: {
        id: x.user_id,
      },
      order: getOrder.id,
    }));
    res(201).json(allOrder);
  } catch (err) {
    next(err);
  }
};
