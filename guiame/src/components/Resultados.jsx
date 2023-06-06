import icon from "../assets/n.jpg"
const Resultados = ({ gastos, setGastos, setNewGasto }) => {
  return (
    <div className="flex flex-row bg-blue-100 shadow-lg rounded-lg p-5 mx-10 my-10">
      <div className="w-1/2 mx-5 ">
      <img src={icon} className=" mx-auto my-5 rounded-lg border-2 border-[#02102b] " alt="university"></img>
      </div>
      <div className="bg-[#bde6f8] rounded-lg">
      <h2 className="text-[#02102b] text-3xl text-center font-bold">
        Examenes de Aptitud
      </h2>
      <h3 className="text-[#3a476a] text-2xl text-center font-bold">
        Última Prueba Tomada
      </h3>
      <h4 className="text-[#5c6989] text-lg text-center font-bold mx-5 my-3">
      Resultados
      </h4>
      </div>
      
    
    </div>
  );
};

export default Resultados;
