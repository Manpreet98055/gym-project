import mongoose from "mongoose";

const SubscriberSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Subscriber ||
  mongoose.model("Subscriber", SubscriberSchema);
