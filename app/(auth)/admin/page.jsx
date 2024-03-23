import { OrganizationProfile } from "@clerk/nextjs";
export default function AdminDashboard() {
  return (
    <>
      <h1>This is the admin dashboard</h1>
      <p>This page is restricted to users with the 'admin' role.</p>
      <OrganizationProfile />
    </>
  );
}
