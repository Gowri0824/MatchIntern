import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Mock login logic
        if (email && password) {
            localStorage.setItem('user', JSON.stringify({ email }));
            navigate('/student');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card glass-panel animate-fade-in">
                <h2 className="auth-title">Welcome Back</h2>
                <p className="auth-subtitle">Login to continue your journey</p>

                <form onSubmit={handleLogin} className="auth-form">
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="student@example.com"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">
                        Login
                    </button>
                </form>

                <p className="auth-footer">
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
            </div>
        </div>
    );
}
