'use client';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter(); // Use the useRouter hook for navigation

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError("Logged in successfully"); // Clear any previous errors
      router.push("/home"); // Redirect to the home page after successful login

    } catch (error) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto p-4 mt-4">
      <h2 className="text-blue-300 text-bold text-center text-2xl">Sign In</h2>
      <form onSubmit={handleLogin}>
        <div className="flex flex-col mb-4">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded p-1 mb-2"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded p-1 mb-2"
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button
          className="text-center w-full p-1 bg-blue-300 text-black font-bold rounded-full hover:cursor-pointer"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}