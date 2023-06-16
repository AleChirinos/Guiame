import { Outlet, Link, useLocation } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import icon from "../assets/user.png"
import prop1 from "../assets/prop1.png"
import prop2 from "../assets/prop2.jpg"
import prop3 from "../assets/prop3.jpg"
import Activity from "../components/Activity";
import Resultados from "../components/Resultados";
const ResultsPage = () => {
    const { pathname } = useLocation();
    console.log(pathname);
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
                    <Link className={`${pathname === '/calendar' ? 'font-bold' : ''}border-t border-b border-blue-400 block text-center my-2 py-1 text-white`} to={`/calendar`}>
                        Calendario
                    </Link>
                </div>
                <div className="flex flex-row bg-white w-3/4 ">
                    <div className="">
                        <Resultados />
                        <div className="w-full flex flex-row ">
                            <div className="bg-[#02102b] shadow-lg rounded-lg p-5 mx-10 ">
                                <h3 className="text-white text-2xl text-center font-bold">
                                    Ten un feedback más claro y explicativo de tu resultado
                                </h3>
                                <Link to="/premium" >
                                <button className=" border-2 border-blue-400 hover:bg-blue-200 bg-blue-100 font-bold py-2 px-2 rounded-2xl w-2/3 mx-auto my-20 w-1/3"
                                    type="button">
                                    Subir a Premium
                                </button>
                                </Link>
                            </div>

                        </div>
                    </div>
                    

                </div>

            </div>
        </>
    );
};
export default ResultsPage;
