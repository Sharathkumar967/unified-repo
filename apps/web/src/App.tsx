import { useState } from "react";
import { loginService } from "@unified/services";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await loginService({
        email,
        password,
      });

      console.log("WEB login success:", response.data);
    } catch (error) {
      console.error("WEB login failed", error);
    }
  };

  return (
    <div>
      <h2>Web Login</h2>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
