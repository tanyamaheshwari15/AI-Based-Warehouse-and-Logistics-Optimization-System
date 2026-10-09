import AuthForm from "../components/AuthForm.jsx";
import useSession from "../useSession.js";

export default function Login() {
  const { signIn } = useSession();

  return <AuthForm mode="login" onSubmit={(_name, email) => signIn(email)} />;
}
