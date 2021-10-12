import Orders from '../models/orders.js';
import asyncHandler from 'express-async-handler';

const orderCourseItems = asyncHandler(async (req, res) => {
  const { orderItems, title, id, price } = req.body;
  console.log('ass', req.body);
  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
  } else {
    const order = new Orders({
      orderItems,
      title,
      id,
      price,
      user: req.user._id
    });

    const saveOrder = await order.save();
    res.status(201).json(saveOrder);
  }
});

export { orderCourseItems };
