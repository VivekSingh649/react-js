import React, { useState, useEffect } from 'react';
import './App.css'; // Import your CSS file

function PasswordGenerator() {

    const [passLength, setLength] = useState(10);
    const [upperCase, setUppercase] = useState(true);
    const [lowerCase, setlowerCase] = useState(true);
    const [symbols, setSymbols] = useState(true);
    const [numbers, setNumbers] = useState(true);
    const [generatedPassword, setGeneratedPassword] = useState('');

    const generatePassword = () => {
        let characters = '';
        if (upperCase) {
            characters += "ABCDEFGHIJHKLMNOPQRSTUVWXYZ";
        }
        if (lowerCase) {
            characters += "abcdefghijklmnopqrstuvwxyz";
        }
        if (numbers) {
            characters += "1234567890";
        }
        if (symbols) {
            characters += '!@#$%^&*()_+-={}[]|\\:;"\'<,>.?/'
        }
        if (!characters) {
            alert("Please select a checkbox");
            return;
        }

        let password = '';

        for (let i = 0; i < passLength; i++) {
            let randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
            setGeneratedPassword(password);
        }
    };

    useEffect(() => {
        generatePassword();
    }, []);

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
        <div className="main_container">
            <div className="tittle">
                <h2>Password Generator</h2>
            </div>
            <div className="main_wrapper">
                <div className="input_wrapper">
                    <div className="input_group">
                        <label>
                            <input
                                type="checkbox"
                                checked={upperCase}
                                onChange={() => setUppercase(!upperCase)} />
                            Uppercase
                        </label>
                    </div>
                    <div className="input_group">
                        <label>
                            <input type="checkbox"
                                checked={lowerCase}
                                onChange={() => setlowerCase(!lowerCase)} />
                            Lowercase
                        </label>
                    </div>
                    <div className="input_group">
                        <label>
                            <input type="checkbox"
                                checked={symbols}
                                onChange={() => setSymbols(!symbols)} />
                            Symbols
                        </label>
                    </div>
                    <div className="input_group">
                        <label>
                            <input type="checkbox"
                                checked={numbers}
                                onChange={() => setNumbers(!numbers)} />
                            Numbers
                        </label>
                    </div>
                </div>
                <div className="length_wrapper">
                    <div className="input_group">
                        <p>Password Lenght<span>{passLength}</span></p>
                        <input
                            type="range"
                            min={5}
                            max={20}
                            value={passLength}
                            onChange={(e) => setLength(parseInt(e.target.value))} />
                    </div>
                </div>
                <div className="password_wrapper">
                    <div className="input_group">
                        <input type="text" readOnly value={generatedPassword} />
                        <div className="copy" onClick={copyPassword}><i className="bi bi-copy"></i></div>
                    </div>
                    <button className='button' onClick={generatePassword}>Generate Password</button>
                </div>
            </div>
        </div>
    )
}

export default PasswordGenerator