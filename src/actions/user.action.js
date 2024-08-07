"use server";

const User = require("@/models/user.model");
import connectToDB from "../../db";

export async function createUser(user) {
  try {
    await connectToDB();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
}
