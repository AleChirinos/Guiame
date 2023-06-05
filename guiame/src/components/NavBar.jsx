import icon from "../assets/user.png"
export const NavBar = () => {
    return (
        <nav className="bg-gray-800 py-4">
            <div className="container mx-full flex justify-between">
                <div className="text-white font-bold mx-10 text-3xl">
                    GUÍAME</div>
                <div className="space-x-4 flex">
                    <img src={icon} className="w-8" alt="Icono Pelicula">
                    </img>
                    <button
                        className=" hover:bg-red-900 text-white font-bold py-2 px-2 rounded w-full"
                        //onClick={resetear}
                        type="button"
                    >
                        Salir
                    </button>

                </div>
            </div>
        </nav>
    );
};
