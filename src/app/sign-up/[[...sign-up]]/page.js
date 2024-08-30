import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
      <div className="flex items-center justify-center h-screen py-96 background">
        <SignUp afterSignOutUrl="/" />
      </div>
  );
}
