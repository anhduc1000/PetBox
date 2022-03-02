import Navbar from "../../components/Navbar";
import LoginForm from "../../components/login-form"
import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <Navbar />
        <LoginForm />
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      <Navbar />
      <LoginForm />
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
