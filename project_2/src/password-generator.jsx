import React, { useState } from 'react';
import './App.css';

function PassGenerator() {
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeUpperCase, setIncludeUpperCase] = useState(true);
  const [includeLowerCase, setIncludeLowerCase] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [generatedPassword, setGeneratedPassword] = useState('');

  const generatePassword = () => {
    let characters = '';

    if (includeNumbers) {
      characters += '0123456789';
    }
    if (includeUpperCase) {
      characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (includeLowerCase) {
      characters += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (includeSymbols) {
      characters += '!@#$%^&*()_+-={}[]|\\:;"\'<,>.?/';
    }

    if (!characters) {
      alert('Please select at least one character type.');
      return; // Prevent empty password generation
    }

    let password = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }

    setGeneratedPassword(password);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(generatedPassword)
      .then(() => {
        alert('Password copied to clipboard!');
      })
      .catch((err) => {
        alert('Failed to copy password: ' + err);
      });
  };

  return (
    <div className="App">
      <h1>Password Generator</h1>
      <div className="settings">
        <label htmlFor="passwordLength">Password Length:</label>
        <input
          type="range"
          id="passwordLength"
          min={8}
          max={50}
          value={passwordLength}
          onChange={(e) => setPasswordLength(parseInt(e.target.value))}
        />

        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
          Include Numbers
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeUpperCase}
            onChange={() => setIncludeUpperCase(!includeUpperCase)}
          />
          Include Uppercase Letters
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeLowerCase}
            onChange={() => setIncludeLowerCase(!includeLowerCase)}
          />
          Include Lowercase Letters
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols(!includeSymbols)}
          />
          Include Symbols
        </label>
      </div>
      <button onClick={generatePassword}>Generate Password</button>
      <div className="generated-password-container">
        <input type="text" value={generatedPassword} readOnly />
        <button onClick={copyPassword}>Copy</button>
      </div>
    </div>
  );
}

export default PassGenerator;