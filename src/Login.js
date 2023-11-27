import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../src/public/login.css'; 


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Make a POST request to your server
        const response = await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            // Handle successful login here
            history.push('/'); // Redirect to dashboard or home page
        } else {
            // Handle errors here
            alert('Login failed!');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
