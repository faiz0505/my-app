"use client";
import Profile from "@/app/components/Profile";
import { UserProfile } from "@clerk/nextjs";
import { BsPostcardHeartFill } from "react-icons/bs";

const UserProfilePage = () => (
  <main className="min-h-screen overflow-hidden flex justify-center">
    <UserProfile path="/user-profile" routing="path">
      <UserProfile.Page
        label="Your Posts"
        labelIcon={<BsPostcardHeartFill />}
        url="your-posts"
      >
        <div className="flex items-center flex-col">
          <Profile />
        </div>
      </UserProfile.Page>
    </UserProfile>
  </main>
);

export default UserProfilePage;
