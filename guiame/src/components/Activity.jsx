import icon from "../assets/n.jpg"
const Activity = ({ gastos, setGastos, setNewGasto }) => {
  return (
    <div className="bg-blue-100 shadow-lg rounded-lg p-5 mx-10 my-10">
      <h2 className="text-gray-900 text-3xl text-center font-bold">
        Actividades Recientes
      </h2>
      <img src={icon} className=" mx-auto my-5 rounded-lg border-2 border-gray-900" alt="university"></img>
      <h3 className="text-[#3a476a] text-2xl text-center font-bold">
        Actividades Recientes
      </h3>
      <h4 className="text-[#5c6989] text-lg text-center font-bold mx-5 my-3">
      Taller para la concientización contra la desinformación en redes sociales y fake news.
      </h4>
    
    </div>
  );
};

export default Activity;
