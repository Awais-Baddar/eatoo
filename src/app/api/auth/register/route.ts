import User from "@/app/models/user.model";
import connectDB from "@/lib/db";
import bcrypt from "bcryptjs";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { name, email, password } = await req.json();
    const existUser = await User.findOne({ email });
    if (existUser) {
      return NextResponse.json(
        {
          message: "Email already Exists",
        },
        { status: 400 },
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        {
          message: "Password must be more than 6 chars ",
        },
        { status: 400 },
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: `Register Error  ${error}`,
      },
      { status: 500 },
    );
  }
}

//name , email , password
// if user exists ny checking email , else register new user
//password validation
//hashing password
// user create
