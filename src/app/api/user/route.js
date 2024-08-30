import { fetchUser, updateUser } from "@/actions/user.action";
import { getAuth, clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { userId: clerkUserId } = getAuth(request);
    const user = await clerkClient().users.getUser(clerkUserId);
    const mongoDbUserId = user.publicMetadata.userId;
    if (!clerkUserId) {
      return NextResponse.json(
        { message: "Not Authenticated" },
        { status: 401 }
      );
    }

    const userDetails = await fetchUser(mongoDbUserId);

    return NextResponse.json(
      {
        message: "Authenticated",
        data: userDetails,
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ status: 500, message: err.message });
  }
}

export async function PUT(request) {
  try {
    const { userId: clerkUserId } = getAuth(request);
    const user = await clerkClient().users.getUser(clerkUserId);
    const mongoDbUserId = user.publicMetadata.userId;
    if (!clerkUserId) {
      return NextResponse.json(
        { message: "Not Authenticated" },
        { status: 401 }
      );
    }
    const userData = await request.json();

    const updatedUser = await updateUser(mongoDbUserId, userData);

    return NextResponse.json(
      {
        message: "Updated details Successfully",
        data: updatedUser,
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ status: 500, message: err.message });
  }
}
