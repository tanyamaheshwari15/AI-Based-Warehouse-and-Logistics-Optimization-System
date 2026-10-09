import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AuthForm({ mode, onSubmit }) {
  const isSignup = mode === "signup";
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (isSignup && password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    onSubmit(name, email);
    navigate("/dashboard", { replace: true });
  }

  return (
    <main className="auth-shell">
      <section className="auth-card">
        <Link className="auth-brand" to="/" aria-label="SupplyChainIQ home">
          <span className="landing-brand-mark"><i className="bi bi-boxes" aria-hidden="true"></i></span>
          SupplyChainIQ
        </Link>
        <div className="auth-card-heading">
          <div className="auth-eyebrow">{isSignup ? "NEW WORKSPACE ACCESS" : "SECURE WORKSPACE ACCESS"}</div>
          <h1>{isSignup ? "Create your account" : "Welcome back"}</h1>
          <p>{isSignup ? "Set up your SupplyChainIQ account to get started." : "Sign in to continue to your operations workspace."}</p>
        </div>

        {error && <div className="alert alert-danger auth-error" role="alert">{error}</div>}

        <form className="auth-form" onSubmit={handleSubmit}>
          {isSignup && (
            <div>
              <label className="form-label" htmlFor="signup-name">Full name</label>
              <input
                autoComplete="name"
                className="form-control"
                id="signup-name"
                maxLength="80"
                minLength="2"
                onChange={(event) => setName(event.target.value)}
                required
                value={name}
              />
            </div>
          )}
          <div>
            <label className="form-label" htmlFor="auth-email">Email address</label>
            <input
              autoComplete="email"
              className="form-control"
              id="auth-email"
              onChange={(event) => setEmail(event.target.value)}
              required
              type="email"
              value={email}
            />
          </div>
          <div>
            <label className="form-label" htmlFor="auth-password">Password</label>
            <input
              autoComplete={isSignup ? "new-password" : "current-password"}
              className="form-control"
              id="auth-password"
              maxLength="128"
              minLength={isSignup ? "8" : undefined}
              onChange={(event) => setPassword(event.target.value)}
              required
              type="password"
              value={password}
            />
            {isSignup && <div className="auth-field-hint">Use at least 8 characters.</div>}
          </div>
          {isSignup && (
            <div>
              <label className="form-label" htmlFor="confirm-password">Confirm password</label>
              <input
                autoComplete="new-password"
                className="form-control"
                id="confirm-password"
                maxLength="128"
                minLength="8"
                onChange={(event) => setConfirmPassword(event.target.value)}
                required
                type="password"
                value={confirmPassword}
              />
            </div>
          )}
          <button className="btn btn-primary auth-submit" type="submit">
            {isSignup ? "Create account" : "Sign in"}
            <i className="bi bi-arrow-right ms-2" aria-hidden="true"></i>
          </button>
        </form>

        <div className="auth-switch">
          {isSignup ? "Already have an account?" : "New to SupplyChainIQ?"}{" "}
          <Link to={isSignup ? "/login" : "/signup"}>{isSignup ? "Sign in" : "Create an account"}</Link>
        </div>
        <Link className="auth-back-link" to="/">
          <i className="bi bi-arrow-left me-1" aria-hidden="true"></i>Back to home
        </Link>
      </section>
      <div className="auth-footer">SUPPLYCHAINIQ <span>·</span> WAREHOUSE &amp; LOGISTICS INTELLIGENCE</div>
    </main>
  );
}
