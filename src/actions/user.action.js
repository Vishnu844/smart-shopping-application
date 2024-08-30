"use server";

const User = require("@/models/user.model");
import { ObjectId } from "mongodb";
import connectToDB from "../../db";

export async function createUser(user) {
  try {
    await connectToDB();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log("Error creating user:" + err.message);
    throw error;
  }
}

export async function updateUser(id, user) {
  try {
    await connectToDB();
    const objectId = new ObjectId(id);
    const updatedUser = await User.findOneAndUpdate(objectId, user, {
      new: true,
    });
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    console.log("Error updating user:" + error.message);
    throw error;
  }
}

export async function fetchUser(id) {
  try {
    await connectToDB();
    const objectId = new ObjectId(id);
    const user = await User.findById(objectId);
    if (!user) {
      throw new Error("User not found");
    }
    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    console.log("Error geting user:" + error.message);
    throw error;
  }
}
