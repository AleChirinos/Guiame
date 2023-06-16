import profileIcon from '../assets/ProfilePhotoTest.png'
import barIcon from "../assets/user.png"
import icon from '../assets/userProfile.svg'
import image from "../assets/webDeveloper.jpg"
import './ProfilePage.css';
import React from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";
import { NavBar } from "../components/NavBar";

const ProfilePage = () => {
    const { pathname } = useLocation();
    console.log(pathname);

    const nameTest="Diego"
    const apellidoTest="Gonzales Barrera"
    const emailTest="diego22@gmail.com"
    const ageTest=17
    const colegioTest="San Ignacio"
    const carreraTest="Matemática"
    const materiaPreferidaTest="Matemáticas" 
    const hobbyPreferidoTest="Juegos de mesa"

    return(

         <>
            <NavBar></NavBar>
            <div className="flex flex-row flex-1 h-screen ">
                <div className=" w-1/4 bg-[#02102b] h-full ">
                    <img src={barIcon} className="w-1/4 ml-32 my-5 justify-center" alt="Icono sideBar"></img>
                    <Link className={`${pathname === '/profile' ? 'font-bold' : ''} border-t border-blue-400 block text-center my-2 py-1 text-white `} to={`/profile`}>
                        Perfil
                    </Link>
                    <Link className={`${pathname === '/test' ? 'font-bold' : ''} border-t border-blue-400 block text-center my-2 py-1 text-white`} to={`/test`}>
                        Pruebas de Aptitud
                    </Link>
                    <Link className={`${pathname === '/results' ? 'font-bold' : ''} border-t border-blue-400 block text-center my-2 py-1 text-white`} to={`/results`}>
                        Resultados
                    </Link>
                    <Link className={`${pathname === '/university' ? 'font-bold' : ''}border-t border-blue-400 block text-center my-2 py-1 text-white`} to={`/university`}>
                        Universidades
                    </Link>
                    <Link className={`${pathname === '/calendar' ? 'font-bold' : ''}border-t border-b border-blue-400 block text-center my-2 py-1 text-white`} to={`/calendar`}>
                        Calendario
                    </Link>
                </div>
                <div className="flex flex-row bg-[#F0FFFB] !place-content-center w-3/4">
                    <div className="flex flex-col">
                        <h1 className='font-bold select-none text-4xl p-[35px] font-sans text-[#293A4E]'>PERFIL</h1>
                        <div className="flex bg-[#CAD6FF] justify-center sm:w-auto mx-auto items-center sm:flex-col flex-col rounded-3xl p-[20px]">
                            <div className='p-[10px] !pb-[0px] flex !flex-row'>
                                <div className='p-[15px]'>
                                    <label for="name" class="block mb-1 text-xl font-bold text-[#293A4E]">Nombre: </label>
                                    <input type="text" name="name" id="name" class="bg-[#E1FFFA] border border-[#82CEEE] text-gray-900 text-md rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-center" 
                                    required disabled defaultValue={nameTest}/>
                                </div>   
                                <div className='p-[15px]'>
                                    <label for="surname" class="block mb-1 text-xl font-bold text-[#293A4E]">Apellidos: </label>
                                    <input type="text" name="surname" id="surname" class="bg-[#E1FFFA] border border-[#82CEEE] text-gray-900 text-md rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-center" 
                                    required disabled defaultValue={apellidoTest}/>
                                </div>
                            </div>
                            <div className='p-[15px] !pt-[0px] flex !flex-row'>
                                <div className='p-[15px]'>
                                    <label for="name" class="block mb-1 text-xl font-bold text-[#293A4E]">Correo Electrónico: </label>
                                    <input type="text" name="name" id="name" class="bg-[#E1FFFA] border border-[#82CEEE] text-gray-900 text-md rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5 text-center" 
                                        required disabled defaultValue={emailTest}/>
                                </div>   
                                <div className='p-[15px]'>
                                    <label for="surname" class="block mb-1 text-xl font-bold text-[#293A4E]">Edad: </label>
                                    <input type="text" name="surname" id="surname" class="bg-[#E1FFFA] border border-[#82CEEE] text-gray-900 text-md rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 text-center" 
                                    required disabled defaultValue={ageTest}/>
                                </div>
                                <div className='p-[15px]'>
                                    <img src={icon} className="rounded-full object-cover h-[150px] w-[150px] opacity-40" alt="university"></img>
                                </div>
                            </div>
                            <hr className='w-full border-black border-[1px] border-dashed border-opacity-30'></hr>
                            <h1 className='select-none text-2xl mt-[13px] font-sans text-[#293A4E]'>Intereses</h1>
                            <div className='p-[10px] !pb-[0px] flex !flex-row'>
                                <h1 className='select-none text-xl font-bold mt-[13px] font-sans text-[#293A4E]'>Colegio: </h1>
                                <h1 className='select-none text-xl mt-[13px] ml-2 font-sans text-[#293A4E]'>{colegioTest}</h1>
                            </div>
                            <div className='p-[10px] !pb-[0px] flex !flex-row'>
                                <h1 className='select-none text-xl font-bold mt-[13px] font-sans text-[#293A4E]'>Carrera de interes: </h1>
                                <h1 className='select-none text-xl mt-[13px] ml-2 font-sans text-[#293A4E]'>{carreraTest}</h1>
                            </div>
                            <div className='p-[10px] !pb-[0px] flex !flex-row'>
                                <h1 className='select-none text-xl font-bold mt-[13px] font-sans text-[#293A4E]'>Materia preferida del colegio: </h1>
                                <h1 className='select-none text-xl mt-[13px] ml-2 font-sans text-[#293A4E]'>{materiaPreferidaTest}</h1>
                            </div>
                            <div className='p-[10px] !pb-[0px] flex !flex-row'>
                                <h1 className='select-none text-xl font-bold mt-[13px] font-sans text-[#293A4E]'>Hobby preferido: </h1>
                                <h1 className='select-none text-xl mt-[13px] ml-2 font-sans text-[#293A4E]'>{hobbyPreferidoTest}</h1>
                            </div>
                        </div>
                    </div>             
                </div>
            </div>
        </>        
    )
}

export default ProfilePage;