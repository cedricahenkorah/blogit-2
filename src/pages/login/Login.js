import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <form
      className="max-w-lg mx-auto mt-[60px] p-10 md:border-2 md:border-solid md:bg-white md:shadow-md rounded-lg"
      onSubmit={handleSubmit}
    >
      <h2 className="text-3xl font-bold">Login</h2>
      <label>
        <span>email</span>
        <input
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="test@mail.com"
        />
      </label>
      <label htmlFor="">
        <span>password</span>
        <input
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="test123"
        />
      </label>

      {!isPending && <button className="btn">Login</button>}
      {isPending && (
        <button className="btn" disabled>
          Loading...
        </button>
      )}
      {error && <div className="error">{error}</div>}
    </form>
  );
}
