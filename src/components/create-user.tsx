"use client";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useState } from "react";

export default function CreateUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess("User created successfully!");
      setError(""); // Clear any previous errors
    } catch (error: any) {
      setError(error.message || "Failed to create user");
      setSuccess(""); // Clear any previous success messages
    }
  };

   return (
     <div className="w-full max-w-sm mx-auto p-4 mt-4">
       <h2 className="text-blue-300 text-bold text-center text-2xl">Create a new user</h2>
       <form onSubmit={handleCreateUser}>
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
           Create user
         </button>
       </form>
     </div>
   );
}
