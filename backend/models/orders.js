import mongoose from 'mongoose';

const orderModel = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    orderItems: [
      {
        title: { type: String, required: true },
        price: { type: Number, required: true },
        id: { type: String, required: true },
        courses: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Course'
        }
      }
    ]
  },
  { timestamps: true }
);

const Order = mongoose.model('Order', orderModel);
export default Order;
