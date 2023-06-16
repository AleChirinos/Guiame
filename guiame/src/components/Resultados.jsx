import { useState } from "react";
import icon from "../assets/test.jpg"

const Resultados = () => {
  const[res,setRes]=useState(true)
  return (
    <div className="flex flex-row bg-blue-100 shadow-lg rounded-lg p-5 mx-10 my-10">
      <div className="w-1/2 mx-5 ">
        <img src={icon} className=" mx-auto my-5 rounded-lg border-2 border-[#02102b] " alt="university"></img>
      </div>
      <div className="bg-[#bde6f8] rounded-lg">
        <h2 className="text-[#02102b] text-3xl text-center font-bold">
          Examenes de Aptitud
        </h2>
        <h3 className="text-[#3a476a] text-2xl text-center font-bold my-5">
          Última Prueba Tomada
        </h3>
        <h4 className="text-[#5c6989] text-lg text-center font-bold mx-5 my-5">
          Resultados - Carreras Compatibles
        </h4>
        {res ? (
            <div>
              <h4 className="text-[#5c6989] text-mg text-center font-bold mx-5 my-5">
                -Ingenieria de Sistemas
              </h4>
              <h4 className="text-[#5c6989] text-mg text-center font-bold mx-5 my-5">
                -Ingenieria en telecomunicaciones
              </h4>
              <h4 className="text-[#5c6989] text-mg text-center font-bold mx-5 my-5">
                -Matemáticas
              </h4>
            </div>
        ) : (
          <div>
            <h4 className="text-[#5c6989] text-mg text-center font-bold mx-5 my-3">
              -Marketing
            </h4>
            <h4 className="text-[#5c6989] text-mg text-center font-bold mx-5 my-3">
              -Diseño Gráfico
            </h4>
            <h4 className="text-[#5c6989] text-mg text-center font-bold mx-5 my-3">
              -Bellas Artes
            </h4>
          </div>

        )
        }



      </div>


    </div >
  );
};

export default Resultados;
