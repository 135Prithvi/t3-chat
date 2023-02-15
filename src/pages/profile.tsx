/* eslint-disable @next/next/no-img-element */
import { useSession, signOut, signIn } from "next-auth/react";


function ProfilePage() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-200 to-slate-400">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <AuthShowcase />
        </div>
      </main>
    </div>
  );
}

export default ProfilePage;
const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();



  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="flex space-x-3 text-center text-2xl">
        {sessionData && sessionData.user.image && (
          <img
            src={sessionData.user.image}
            alt=""
            className="h-12 w-12 rounded-full p-1"
          />
        )}
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
      </p>
      <button
        className="rounded-full border-2 px-10  py-3 font-semibold no-underline transition hover:scale-125 "
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
