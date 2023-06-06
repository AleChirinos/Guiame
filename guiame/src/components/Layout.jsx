import { Outlet, Link, useLocation } from "react-router-dom";
import { NavBar } from "./NavBar";
import icon from "../assets/user.png"
import prop1 from "../assets/prop1.png"
import prop2 from "../assets/prop2.jpg"
import prop3 from "../assets/prop3.jpg"
import Activity from "./Activity";
const Layout = () => {
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
          <Link className={`${pathname === '/results' ? 'font-bold' : ''}border-t border-blue-400 block text-center my-2 py-1 text-white`} to={`/results`}>
            Resultados
          </Link>
          <Link className={`${pathname === '/university' ? 'font-bold' : ''}border-t border-blue-400 block text-center my-2 py-1 text-white`} to={`/university`}>
            Universidades
          </Link>
          <Link className={`${pathname === '/calendar' ? 'font-bold' : ''}border-t border-b border-blue-400 block text-center my-2 py-1 text-white`} to={`/calendar`}>
            Calendario
          </Link>
        </div>
        <div className="flex flex-row bg-white w-3/4">
          <div className="basis-2/3 ">
            <Activity />
            <div className="basis-1/2 flex flex-row">
            <Link to="/test" ><button className="text-white hover:bg-red-900 bg-[#3a476a] font-bold py-2 px-2 rounded w-2/3 mx-10"
                //onClick={resetear}
                type="button">
                Exámenes
              </button></Link>
              <Link to="/university" ><button className="text-white hover:bg-red-900 bg-[#3a476a] font-bold py-2 px-2 rounded w-2/3 mx-10"
                //onClick={resetear}
                type="button">
                Universidades
              </button></Link>
              <Link to="/principal" ><button className="text-white hover:bg-red-900 bg-[#3a476a] font-bold py-2 px-2 rounded w-2/3 mx-10"
                //onClick={resetear}
                type="button">
                Mi Comunidad
              </button></Link>
            </div>
          </div>
          <div className="basis-1/3">
          <img src={prop1} className="  h-80 my-3 rounded-lg border border-gray-900" alt="prop1"></img>
          <img src={prop2} className="  h-80 my-3 rounded-lg border border-gray-900" alt="prop2"></img>
          <img src={prop3} className="  h-80 w-80 my-4 mb-5 rounded-lg border border-gray-900" alt="prop3"></img>

          </div>

        </div>
        
      </div>
    </>
  );
};
export default Layout;
