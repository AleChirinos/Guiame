import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/backgroundRegister.jpg';
import LoginPage from './LoginPage';

const RegisterPage = () => {
    const[email,setEmail]=useState("")
    const[pass,setPass]=useState("")
    const guardar=()=>{
        <LoginPage email={email} pass={pass}></LoginPage>
    }
    return (
        <div className="h-screen bg-cover bg-center flex items-center bg-opacity-50" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className=" ml-auto mx-20 bg-white rounded-lg">
                <div className="mx-10 my-10">
                    <p className='text-4xl'>Registrate en nuestra plataforma</p>
                    <form >
                        <div className="my-3">
                            <label>Nombre completo</label> <br />
                            <input
                                type="text"
                                placeholder='Introduce tu nombre completo aqui'
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
                            <label>Email</label> <br />
                            <input
                                type="email"
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
                            <label>Número de celular</label> <br />
                            <input
                                type="number"
                                placeholder='Introduce tu número de celular aqui'
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
                            <label>Edad</label> <br />
                            <input
                                type="number"
                                placeholder='Introduce tu edad aqui'
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
                            <label>Colegio</label> <br />
                            <input
                                type="text"
                                placeholder='Introduce el nombre de tu colegio aqui'
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
                            <label>Carrera de interes</label> <br />
                            <input
                                type="text"
                                placeholder='Introduce la carrera de tu interes aqui'
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
                            <label>Hobbies</label> <br />
                            <input
                                type="text"
                                placeholder='Introduce alguno de tus hobies aqui'
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
                            <label>Materia favorita del colegio</label> <br />
                            <input
                                type="text"
                                placeholder='Introduce la materia que más te gusta del colegio aqui'
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
                                placeholder='Introduce tu contraseña aqui'
                                onChange={(e) => setPass(e.target.value)}
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
                        <Link to="/" >
                            <button onClick={guardar} className=" px-4 py-2 bg-blue-500 text-white rounded my-2" type="submit"
                                style={{
                                    width: '100%'
                                }}>Crear cuenta</button>
                        </Link>
                    </form>
                    <p >¿Ya tienes una cuenta?
                        <Link to="/" >
                            Inicia sesión
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;