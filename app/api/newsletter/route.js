import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Subscriber from "@/models/Subscriber";
import { sendMail } from "@/lib/mailer";

export async function POST(req) {
  await connectDB();
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email required" }, { status: 400 });
  }

  const exists = await Subscriber.findOne({ email });
  if (exists) {
    return NextResponse.json({ error: "Already subscribed" }, { status: 409 });
  }

  await Subscriber.create({ email });
  await sendMail(email);

  return NextResponse.json({ message: "Subscribed successfully" });
}

export async function GET() {
  await connectDB();
  const subscribers = await Subscriber.find();
  return NextResponse.json(subscribers);
}
