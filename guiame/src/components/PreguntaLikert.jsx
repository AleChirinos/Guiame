import React from 'react';

const PreguntaLikert = ({ pregunta, opciones, onRespuestaSeleccionada }) => {
    return (
      <div className="pregunta-likert">
        <h3 className="pregunta">{pregunta}</h3>
        <div className="opciones">
          {opciones.map((opcion, index) => (
            <label key={index}>
              <input
                type="radio"
                name={pregunta}
                value={opcion}
                onChange={(e) => onRespuestaSeleccionada(pregunta, e.target.value)}
              />
              {opcion}
            </label>
          ))}
        </div>
      </div>
    );
  };
  
export default PreguntaLikert;