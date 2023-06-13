import profileIcon from '../assets/ProfilePhotoTest.png'
import './ProfilePage.css';
import React from 'react';

const ProfilePage = () => {
    const nameTest="Nicole"
    const apellidoTest="Góngora Rodríguez"
    const emailTest="nikita27111@hotmail.com"
    const ageTest=22
    const colegioTest="Santa Teresa"
    const carreraTest="Ingeniería de sistemas"
    const materiaPreferidaTest="Técnica Tecnológica" 
    const hobbyPreferidoTest="Videojuegos"

    return(

        
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
                        <img src={profileIcon} className="rounded-full object-cover h-[150px] w-[150px] border-2 border-[#02102b]" alt="university"></img>
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
        
    )
}

export default ProfilePage;