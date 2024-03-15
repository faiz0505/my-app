import PostForm from "@/app/components/postForm";
import { auth } from "@clerk/nextjs";
const page = () => {
  const { sessionClaims } = auth();
  // console.log(sessionClaims);
  const userId = sessionClaims._id.userId;
  // console.log(userId);
  return (
    <main className="wrapper">
      <PostForm userId={userId} />
    </main>
  );
};

export default page;
