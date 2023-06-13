import { Outlet, Link, useLocation } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import icon from "../assets/user.png"
import image from "../assets/webDeveloper.jpg"
import prop1 from "../assets/prop1.png"
import prop2 from "../assets/prop2.jpg"
import prop3 from "../assets/prop3.jpg"
import Activity from "../components/Activity";
import Resultados from "../components/Resultados";
const CarreraPage = () => {
    const { pathname } = useLocation();
    console.log(pathname);

    const carreraTitleTest="Ingeniería de Sistemas Computacionales"
    const carreraAptitudesTest=["Matemáticas","Programación básica","Videojuegos"]
    const carreraDescTest="Esta altamente capacitado para el diseño, desarrollo, implementación y mantenimiento de sistemas informáticos. Combina, en conceptos generales, conocimientos de ingeniería, ciencias de la computación y gestión de proyectos para abordar cualquier desafío que implique la creación y optimización de software de alta confiabilidad para la constante evolución tecnológica. Gracias a esta carrera, las organizaciones pueden contar con profesionales de alto nivel capaces de incorporar y desarrollar las variables tecnológicas eficientemente"
    const carreraHabilidadesTest=["Resolución de problemas","Pensamiento analítico","Trabajo en equipo","Actualización del entorno", "Gestión de proyectos a media-gran escala"]
    const carreraTrabajosTest=["Desarrollador Full Stack de sistemas web","Ingeniero de DevOps","Ingeniero de Seguridad Informática","Analista/Científico de datos", "Especialista en"]
    return (
        <>
            <NavBar></NavBar>
            <div className="flex flex-row flex-1 h-screen ">
                <div className=" w-1/4 bg-[#02102b] h-full ">
                    <img src={icon} className="w-1/4 ml-32 my-5 justify-center" alt="Icono sideBar"></img>
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
                <div className="flex flex-row bg-white w-3/4 ">
                    <div className="flex flex-row bg-blue-100 shadow-lg w-full rounded-lg p-5 mx-10 my-10">
                        <div className="w-[70%] mx-5 flex flex-col">
                            <img src={image} className=" mx-auto my-5 rounded-lg border-2 border-[#02102b] object-cover h-96 w-96" alt="university"></img>
                            <div className="bg-[#d8f9ff] rounded-lg w-full">
                                <h2 className="text-[#02102b] text-lg text-center font-bold mx-5 my-3">
                                ¿Qué trabajos hay para la carrera de {carreraTitleTest}?
                                </h2>
                                <ul className="text-md font-semibold text-justify p-2 ml-10">
                                    {carreraTrabajosTest.map((trabajo)=>{
                                        return(
                                        <li className="list-disc text-[#5c6989]">{trabajo}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="bg-[#bde6f8] rounded-lg w-full">
                            <div className="bg-[#CAD6FF] rounded-t-lg">
                                <h1 className="text-[#02102b]  text-5xl pt-[30px] text-center font-bold">
                                {carreraTitleTest}
                                </h1>
                                <h3 className="text-[#3a476a] text-2xl pt-[20px] text-center font-bold">
                                Una carrera especializada para aquellos que tienen aptitudes en:
                                </h3>
                                <ul className="text-2xl text-center py-6">
                                    {carreraAptitudesTest.map((aptitud)=>{
                                        return(
                                        <li>{aptitud}</li>
                                        )
                                        })}
                                </ul>
                            </div>
                            
                            <hr className='w-full border-black border-[1px] border-dashed border-opacity-30'></hr>
                            <h2 className="text-[#5c6989] text-lg text-center font-bold mx-5 my-3">
                            ¿Cómo es un especialista en {carreraTitleTest}?
                            </h2>
                            <p className="p-4 text-justify text-md">
                            {carreraDescTest}
                            </p>
                            <h2 className="text-[#5c6989] text-lg text-center font-bold mx-5 my-1">
                            ¿Cuales son los puntos fuertes que adquieren estos especialistas?
                            </h2>
                            <ul className="text-md font-semibold text-justify p-2 ml-10">
                                    {carreraHabilidadesTest.map((aptitud)=>{
                                        return(
                                        <li className="list-disc">{aptitud}</li>
                                        )
                                        })}
                            </ul>
                        </div>
                    </div >
                                    
                </div>
            </div>
        </>
    );
}

export default CarreraPage;