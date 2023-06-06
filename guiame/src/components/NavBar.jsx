import { Link, useLocation } from "react-router-dom";
import icon from "../assets/user.png"
export const NavBar = ({isOpen,setIsopen}) => {
    
    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }
    return (
        <nav className=" w-full h-full flex items-center justify-between bg-gray-800 p-4">
            <div className=" flex items-center">
                <button
                    className="text-white text-xl mr-4"
                    onClick={ToggleSidebar}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
                <Link to="/principal" ><div className="text-white font-bold mx-10 text-3xl">GUÍAME</div>
                </Link>
            </div>
            <div className="space-x-4 flex items-center">
                <img src={icon} className="w-8 mx-2" alt="Icono Log Out">
                </img>
                <button
                    className=" hover:bg-red-900 text-white font-bold py-2 px-2 rounded w-full"
                    //onClick={resetear}
                    type="button"
                >
                    Salir
                </button>

            </div>
        </nav>
    );
};
