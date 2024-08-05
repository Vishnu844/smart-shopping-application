import { UserProfile } from "@clerk/nextjs";
import React from "react";

const Profile = () => {
  return (
    <>
      <div>Profile</div>
      <UserProfile />
    </>
  );
};

export default Profile;
