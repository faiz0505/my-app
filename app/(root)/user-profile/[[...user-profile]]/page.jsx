"use client";
import Profile from "@/app/components/Profile";
import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => (
  <main className="min-h-screen overflow-hidden">
    <UserProfile path="/user-profile" routing="path">
      <UserProfile.Page label="Your Posts" labelIcon="@" url="your-posts">
        <Profile />
      </UserProfile.Page>
    </UserProfile>
  </main>
);

export default UserProfilePage;
