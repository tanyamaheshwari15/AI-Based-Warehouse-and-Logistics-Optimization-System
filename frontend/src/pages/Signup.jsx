import AuthForm from "../components/AuthForm.jsx";
import useSession from "../useSession.js";

export default function Signup() {
  const { signUp } = useSession();

  return <AuthForm mode="signup" onSubmit={signUp} />;
}
