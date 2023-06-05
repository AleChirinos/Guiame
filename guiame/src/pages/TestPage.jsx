import React from 'react';
import './TestPage.css';

const TestPage = () => {
  return (
    <div className="test-page">
      <div className="header">
        <div className="title-container">
          <h1 className="title">Tests de aptitud</h1>
        </div>
      </div>
      <div className="grid">
        <div className="grid-item active">
          <div className="icon-container">
            <img className="icon" src="src/assets/document.png" alt="Document Icon" />
          </div>
          <h2 className="test-title">Test 1</h2>
        </div>
        <div className="grid-item locked">
          <div className="icon-container">
            <img className="icon" src="src/assets/document.png" alt="Document Icon" />
          </div>
          <h2 className="test-title">Test 2</h2>
        </div>
        <div className="grid-item locked">
          <div className="icon-container">
            <img className="icon" src="src/assets/document.png" alt="Document Icon" />
          </div>
          <h2 className="test-title">Test 3</h2>
        </div>
        <div className="grid-item locked">
          <div className="icon-container">
            <img className="icon" src="src/assets/document.png" alt="Document Icon" />
          </div>
          <h2 className="test-title">Test 4</h2>
        </div>
        <div className="grid-item locked">
          <div className="icon-container">
            <img className="icon" src="src/assets/document.png" alt="Document Icon" />
          </div>
          <h2 className="test-title">Test 5</h2>
        </div>
        <div className="grid-item locked">
          <div className="icon-container">
            <img className="icon" src="src/assets/document.png" alt="Document Icon" />
          </div>
          <h2 className="test-title">Test 6</h2>
        </div>
        <div className="grid-item locked">
          <div className="icon-container">
            <img className="icon" src="src/assets/document.png" alt="Document Icon" />
          </div>
          <h2 className="test-title">Test 7</h2>
        </div>
        <div className="grid-item locked">
          <div className="icon-container">
            <img className="icon" src="src/assets/document.png" alt="Document Icon" />
          </div>
          <h2 className="test-title">Test 8</h2>
        </div>
        <div className="grid-item locked">
          <div className="icon-container">
            <img className="icon" src="src/assets/document.png" alt="Document Icon" />
          </div>
          <h2 className="test-title">Test 9</h2>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
