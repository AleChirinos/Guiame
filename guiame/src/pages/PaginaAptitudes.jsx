import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PreguntaLikert from '../components/PreguntaLikert';
import datos from '../data/test1.json';
import './PaginaAptitudes.css';

const PaginaAptitudes = () => {
    const [respuestas, setRespuestas] = useState({});
    const handleRespuestaSeleccionada = (pregunta, respuesta) => {
        setRespuestas((prevRespuestas) => ({
            ...prevRespuestas,
            [pregunta]: respuesta,
        }));
    };

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
                <Link to="/results">
                    <button type="submit" className="boton">Obtener recomendación</button>
                </Link>
            </form>
        </div>
    );
};

export default PaginaAptitudes;