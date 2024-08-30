import Layout from "@/components/Layout";
import { UserProfile } from "@clerk/nextjs";
import React from "react";

const Profile = () => {
  return (
    <>
      <Layout>
        <div className="flex items-center justify-center py-16">
          <UserProfile />
          {/* <ProfilePage /> */}
        </div>
      </Layout>
    </>
  );
};

export default Profile;
