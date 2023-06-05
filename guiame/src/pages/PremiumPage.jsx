import React from 'react';
import './PremiumPage.css';

const PremiumPage = () => {
  return (
    <div className="premium-page">
      <div className="premium-box">
        <h1>Cambia a cuenta Premium</h1>
        <div className="feature-box blue-box">
          <h2>Subtítulo 1</h2>
          <ul>
            <li>Característica 1</li>
            <li>Característica 2</li>
            <li>Característica 3</li>
          </ul>
          <button>Botón 1</button>
        </div>
        <div className="feature-box green-box">
          <h2>Subtítulo 2</h2>
          <ul>
            <li>Característica 1</li>
            <li>Característica 2</li>
            <li>Característica 3</li>
          </ul>
          <button>Botón 2</button>
        </div>
        <div className="feature-box light-blue-box">
          <h2>Subtítulo 3</h2>
          <ul>
            <li>Característica 1</li>
            <li>Característica 2</li>
            <li>Característica 3</li>
          </ul>
          <button>Botón 3</button>
        </div>
      </div>
    </div>
  );
};

export default PremiumPage;
