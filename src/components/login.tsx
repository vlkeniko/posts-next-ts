'use client';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useRouter } from "next/navigation";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter(); // Use the useRouter hook for navigation

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setError(""); // Clear any previous errors
            router.push("/home"); // Redirect to the home page after successful login
        } catch (error) {
            setError("Invalid email or password");
        }
    };

    return (
        <div>
            <h2>Log In</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type='submit'>Login</button>
            </form>
        </div>
    );
}