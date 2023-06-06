import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import PreguntaLikert from '../components/PreguntaLikert';
import datos from '../data/test1.json';
import './PaginaAptitudes.css';
import Resultados from '../components/Resultados';
const PaginaAptitudes = () => {
    const [respuestas, setRespuestas] = useState([]);
    const handleRespuestaSeleccionada = (pregunta, respuesta) => {
      if(respuesta==="Muy interesado/a"){
        setRes(true)
        console.log(res)
      };
        setRespuestas((prevRespuestas) => ([
            ...prevRespuestas,
            respuesta,
        ]));
       
    };
    const navigate = useNavigate();
    const res = () => {
      
      navigate("/results")
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes implementar la lógica para calcular la recomendación de carrera;
        console.log(respuestas);
        
    };

    return (
        <div className="container">
            <h1 className="titulo">Test de aptitudes para carreras universitarias</h1>
            
            <form onSubmit={handleFormSubmit}>
                {datos.map((pregunta, index) => (
                    <PreguntaLikert
                        key={index}
                        pregunta={pregunta.pregunta}
                        opciones={pregunta.opciones}
                        onRespuestaSeleccionada={handleRespuestaSeleccionada}
                    />
                ))}
                
                    <button type="submit" className="boton" onClick={res}>
                    
                      Obtener recomendación</button>
            </form>
        </div>
    );
};

export default PaginaAptitudes;