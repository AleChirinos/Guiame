import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/backgroundLogin.jpg';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };
    return (
        <div className="h-screen bg-cover bg-center flex items-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div>
                <h2>Bienvenido a Guiame</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Contraseña:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Link to="/principal" >
                        <button type="submit">Iniciar sesión</button>
                    </Link>
                </form>
                <p>¿Aún no tienes una cuenta?
                    <Link to="/registro" >
                        Regístrate
                    </Link>
                </p>
            </div>
        </div>

    )
}

export default LoginPage;