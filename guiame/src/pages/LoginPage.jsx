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
        <div className="h-screen bg-cover bg-center flex items-center bg-opacity-50" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className=" mx-20 bg-white rounded-lg ">
                <div className="mx-10 my-10">
                    <p className='text-4xl'>Bienvenido a Guiame</p>
                    <form onSubmit={handleSubmit}>
                        <div className="my-3">
                            <label>Email</label> <br />
                            <input
                                type="email"
                                value={email}
                                placeholder='Introduce tu email aqui'
                                onChange={(e) => setEmail(e.target.value)}
                                style={{
                                    width: '100%',
                                    border: '1px solid #a8c0ff',
                                    borderRadius: '5px',
                                    padding: '5px',
                                    backgroundColor: '#f5faff',
                                    color: '#333',
                                }}
                            />
                        </div>
                        <div className="my-3">
                            <label>Contraseña</label> <br />
                            <input
                                type="password"
                                value={password}
                                placeholder='Introduce tu contraseña aqui'
                                onChange={(e) => setPassword(e.target.value)}
                                style={{
                                    width: '100%',
                                    border: '1px solid #a8c0ff',
                                    borderRadius: '5px',
                                    padding: '5px',
                                    backgroundColor: '#f5faff',
                                    color: '#333',
                                }}
                            />
                        </div>
                        <Link to="/principal" >
                            <button className=" px-4 py-2 bg-blue-500 text-white rounded my-2" type="submit" 
                            style={{
                                width: '100%'
                            }}>Iniciar sesión</button>
                        </Link>
                    </form>
                    <p >¿Aún no tienes una cuenta?
                        <Link to="/registro" >
                            Regístrate
                        </Link>
                    </p>
                </div>
            </div>
        </div>

    )
}

export default LoginPage;