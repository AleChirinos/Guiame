import { Outlet, Link, useLocation } from "react-router-dom";
import { NavBar } from "./NavBar";
import icon from "../assets/user.png"
const Layout = () => {
  const {pathname} = useLocation();
  console.log(pathname);
  return (
    <>
      <NavBar></NavBar>
      <div className="flex flex-row flex-1 h-screen">
        <div className="w-1/4 bg-gray-700">
        <img src={icon} className="w-1/4 ml-32 my-5 justify-center" alt="Icono Pelicula"></img>
          <Link className={`${pathname === '/profile'? 'font-bold': ''} block text-center my-2 text-white `} to={`/profile`}>
            Perfil
          </Link>
          <Link className={`${pathname === '/test'? 'font-bold': ''} block text-center my-2 text-white`} to={`/test`}>
            Test
          </Link>
          <Link className={`${pathname === '/results'? 'font-bold': ''} block text-center my-2 text-white`} to={`/results`}>
            Resultados
          </Link>
          <Link className={`${pathname === '/university'? 'font-bold': ''} block text-center my-2 text-white`} to={`/university`}>
            Universidades
          </Link>
        </div>
        <div className="flex-1 bg-neutral-400">
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default Layout;
