import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import './PremiumPage.css';

const PremiumPage = () => {
  const navigate = useNavigate();

  
  const handlePremiumPayment = () => {
    navigate("/testPremium")
    
  };
  return (
    <div className="premium-page">
      <div className="premium-box">
        <h1>Cambia a cuenta Premium</h1>
        <div className="feature-box blue-box">
          <h2 className='mb-4 text-5xl font-bold font-sans text-[#293A4E]'>° Cuenta Gratis °</h2>
          <ul className='list-disc pl-6'>
            <li className='font-semibold'>Acceso a un examen de aptitud PAA básico</li>
            <li className='font-semibold'>Resultados básicos de rendimiento</li>
          </ul>
          <button className='bg-[#ADD2C9] border border-[#82CEEE] text-gray-900 text-lg font-bold rounded-3xl focus:ring-blue-500 focus:border-[#141C24] block w-1/2 p-2'>Cuenta actual</button>

        </div>
        <div className="feature-box green-box">
          <h2 className='mb-4 text-5xl font-bold font-sans text-[#293A4E]'>° Cuenta Premium °</h2>
          <ul className='list-disc pl-6'>
            <li className='font-semibold'>Acceso a todos los exámenes de Aptitud, Becas e Inglés de todas las Universidades en Bolivia</li>
            <li className='font-semibold'>Resultados detallados de rendimiento con gráficos, resúmenes y feedback de sesiones de psicología</li>
            <li className='font-semibold'>Acceso al calendario para sesiones de psicología</li>
          </ul>
          <button onClick={handlePremiumPayment}className='bg-[#BCD7F5] border-2 border-[#5787E5] text-gray-900 text-lg font-bold rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2'>Subir a premium</button>
        </div>
        <div className="feature-box light-blue-box">
          <h2 className='mb-4 text-5xl font-bold font-sans text-[#293A4E]'>° 50 $us °</h2>
          <ul className='list-disc pl-6'>
            <li className='font-semibold'>Pago por mes, primer cobro desde 7 días de la activación de Premium</li>
            <li className='font-semibold'>Recursos Premium accesibles desde la activación de la cuenta Premium hasta cancelación del plan de prueba</li>
            <li className='font-semibold'>Al momento de la anulación de la cuenta, se mantendrán los resultados pero se restringirán los accesos a recursos Premium</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PremiumPage;
