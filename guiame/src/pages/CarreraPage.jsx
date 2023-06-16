import { Outlet, Link, useLocation, useParams } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import icon from "../assets/user.png"

import sistemasImage from "../assets/webDeveloper.jpg"
import matematicaImage from "../assets/matematica.jpg"
import telecomImage from "../assets/telecom.jpg"

import prop1 from "../assets/prop1.png"
import prop2 from "../assets/prop2.jpg"
import prop3 from "../assets/prop3.jpg"
import Activity from "../components/Activity";
import Resultados from "../components/Resultados";



const CarreraPage = () => {
    const { pathname } = useLocation();
    console.log(pathname);
    const params = useParams();
    console.log(params.carreraId);

    let collection=[
        {
            "id":"sistemas",
            "img":sistemasImage,
            "carreraTitleTest":"Ingeniería de Sistemas Computacionales",
            "carreraAptitudesTest":["Matemáticas","Programación básica","Videojuegos"],
            "carreraDescTest":"Esta altamente capacitado para el diseño, desarrollo, implementación y mantenimiento de sistemas informáticos. Combina, en conceptos generales, conocimientos de ingeniería, ciencias de la computación y gestión de proyectos para abordar cualquier desafío que implique la creación y optimización de software de alta confiabilidad para la constante evolución tecnológica. Gracias a esta carrera, las organizaciones pueden contar con profesionales de alto nivel capaces de incorporar y desarrollar las variables tecnológicas eficientemente",
            "carreraHabilidadesTest":["Resolución de problemas","Pensamiento analítico","Trabajo en equipo","Actualización del entorno", "Gestión de proyectos a media-gran escala"],
            "carreraTrabajosTest":["Desarrollador Full Stack de sistemas web","Ingeniero de DevOps","Ingeniero de Seguridad Informática","Analista/Científico de datos", "Ingeniero en QA"],
            "carreraUniversidades":["Universidad Privada Boliviana", "Universidad Mayor de San Andres", "Universidad Católica Boliviana", "Universidad Tecnológica Boliviana", "Unifranz", "Universidad Privada de Santa Cruz"],
            "carreraLinksU":["https://www.upb.edu/carreras/ing-sistemas-computacionales-lp-inicio","https://umsabolivia.com/informatica/","https://lpz.ucb.edu.bo/pregrado/ingenieria-de-sistemas/", "https://utb.edu.bo/ingenieria-de-sistemas/", "https://unifranz.edu.bo/landings/estudiar-ingenieria-sistemas/","https://www.upsa.edu.bo/es/carreras-facultad-de-ingenieria/ingenieria-de-sistemas"]
        },
        {
            "id":"matematica",
            "img":matematicaImage,
            "carreraTitleTest":"Matemática",
            "carreraAptitudesTest":["Álgebra lineal","Estadística y Probabilidades","Razonamiento Lógico"],
            "carreraDescTest":"Esta altamente capacitado para el desarrollo y la creación de conocimientos matemáticos en las áreas de Matemática Pura y Aplicada. Tiene la capacidad de aplicar conocimientos avanzados de diversas áreas de la matemática como Algebra, Análisis, Geometría, Topología, Optimización Matemática, Modelos Matemáticos, Análisis Numérico, Análisis Cuantitativo de Datos, entre otros, para orientarlos a la investigación y formación de soluciones a problemas multidisciplinarios en las áreas de Ingeniería y otros con necesidad de medidas y cifras exactas",
            "carreraHabilidadesTest":["Abstracción y generalización","Razonamiento lógico","Habilidades numéricas","Adaptabilidad y aprendizaje continuo", "Pensamiento abstracto"],
            "carreraTrabajosTest":["Analista/Científico de datos","Investigador en Ciencias Exactas","Docente de Matemáticas","Analista Financiero", "Analista Estadístico"],
            "carreraUniversidades":["Universidad Mayor de San Andres", "Universidad Mayor de San Simón", "Universidad Simón I. Patiño"],
            "carreraLinksU":["http://cmat.umsa.bo/acerca/","https://www.universidadesonline.com.bo/universidad-mayor-de-san-simon/licenciatura-en-matematicas","https://usip.edu.bo/carreras/matematica/"]
        },
        {
            "id":"telecom",
            "img":telecomImage,
            "carreraTitleTest":"Ingeniería en telecomunicaciones",
            "carreraAptitudesTest":["Matemáticas","Programación básica","Conceptos básicos de conexión a red"],
            "carreraDescTest":"Esta altamente capacitado para diseñar e implementar sistemas electrónicos digitales y analógicos, así como implementar comunicaciones de fibra y wireless para la transmisión de datos. Su objetivo principal es el diseño y monitoreo de la automatización y control de los procesos de producción mediante sistemas sostenibles para la sustentabilidad moderna en el ámbito digital (Internet, conexiones satelitales de TV) y empresarial (producción a nivel de fábrica, comunicación móvil)",
            "carreraHabilidadesTest":["Conocimiento de protocolos de red y seguridad de datos","Habilidades analíticas","Gestión de proyectos a media-gran escala","Resolución de problemas", "Adaptabilidad y aprendizaje continuo de tecnologías"],
            "carreraTrabajosTest":["Especialista en Seguridad de Redes","Ingeniero de Soporte Técnico","Especialista en telecomunicaciones móviles","Especialista en comunicaciones satelitales","Ingeniero de radiofrecuencia"],
            "carreraUniversidades":["Universidad Privada Boliviana", "Universidad Mayor de San Andres", "Universidad Católica Boliviana", "Universidad Tecnológica Boliviana", "Unifranz"],
            "carreraLinksU":["https://www.upb.edu/carreras/ing-electronico-telecom-lp-inicio","http://www.eltumsa.com/?page_id=1399","https://lpz.ucb.edu.bo/pregrado/ingenieria-telecomunicaciones/","https://utb.edu.bo/ingenieria-electronica/", "https://unifranz.edu.bo/landings/estudiar-ingenieria-sistemas/"]
        },
    ]

    let carreraTitleTest="";
    let carreraAptitudesTest=[];
    let carreraDescTest="";
    let carreraHabilidadesTest=[];
    let carreraTrabajosTest=[];
    let carreraImg="";
    let carreraUniv=[];
    let carreraLinksU=[];

    let emp = collection.find(e => e.id == params.carreraId);
    if (emp) {
        carreraTitleTest=emp.carreraTitleTest;
        carreraAptitudesTest=emp.carreraAptitudesTest;
        carreraDescTest=emp.carreraDescTest;
        carreraHabilidadesTest=emp.carreraHabilidadesTest;
        carreraTrabajosTest=emp.carreraTrabajosTest;
        carreraImg=emp.img;
        carreraUniv=emp.carreraUniversidades;
        carreraLinksU=emp.carreraLinksU;
    } else {
        console.log("not found");
    }

    
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
                            <img src={carreraImg} className=" mx-auto my-5 rounded-lg border-2 border-[#02102b] object-cover h-[286px] w-[486px]" alt="university"></img>
                            <div className="bg-[#d8f9ff] rounded-lg w-full my-2">
                                <h2 className="text-[#02102b] text-lg text-center font-bold mx-5 my-1">
                                ¿Qué trabajos hay para la carrera de {carreraTitleTest} ?
                                </h2>
                                <ul className="text-md font-semibold text-justify p-2 ml-10">
                                    {carreraTrabajosTest.map((trabajo)=>{
                                        return(
                                        <li className="list-disc text-[#5c6989]">{trabajo}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className="bg-[#a8eefa] rounded-lg w-full">
                                <h2 className="text-[#02102b] text-lg text-center font-bold mx-5 my-1">
                                ¿Qué universidades se especializan en la carrera de {carreraTitleTest} ?
                                </h2>
                                <ul className="text-md font-normal text-justify p-2 ml-10">
                                    {carreraUniv.map((univ, index)=>{
                                        return(
                                        <li className="list-decimal"> <a href={carreraLinksU[index]} className="text-[#363a42] hover:text-[#0044ff]">{univ} </a></li>
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

{/* Para el Resultados page
<div className="!place-content-center !text-center">
<ul>
  <li className="mx-5 my-4"><Link to={`/carrera/marketing`} className="text-[#10172b] text-mg  font-semibold hover:text-[#5f73a8]">
  * Marketing</Link></li>
  <li className="mx-5 my-4"><Link to={`/carrera/disenografico`} className="text-[#10172b] text-mg  font-semibold hover:text-[#5f73a8]">
  * Diseño Gráfico</Link></li>
  <li className="mx-5 my-4"><Link to={`/carrera/disenografico`} className="text-[#10172b] text-mg  font-semibold hover:text-[#5f73a8]">
  * Diseño Gráfico</Link></li>
</ul>
</div> */}