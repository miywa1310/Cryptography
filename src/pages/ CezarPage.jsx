
import React from 'react'
import { useState } from 'react';
import CezarTheory from '../components/CezarTheory';

const alphabet = [
    'a', 'á', 'b', 'd', 'e', 'f', 'g', 'ǵ', 'h', 'x', 'í', 'i', 'j',
    'k', 'q', 'l', 'm', 'n', 'ń', 'o', 'ó', 'p', 'r', 's', 't', 'u',
    'ú', 'v', 'w', 'y', 'z', 'sh', 'c', 'ch'
];

const normalizeText = (text) => {
    return text
        .replace(/CH/g, 'Ç') // katta CH
        .replace(/Ch/g, 'Ç') // katta CH
        .replace(/Sh/g, 'Ş') // bosh harf Sh
        .replace(/SH/g, 'Ş') // katta SH
        .replace(/ch/g, 'ç')
        .replace(/sh/g, 'ş');
};

const denormalizeText = (text) => {
    return text
        .replace(/Ç/g, 'Ch')
        .replace(/Ş/g, 'Sh')
        .replace(/ç/g, 'ch')
        .replace(/ş/g, 'sh');
};

const getCharIndex = (char) => {
    const lower = char.toLowerCase();
    if (lower === 'ş') return alphabet.indexOf('sh');
    if (lower === 'ç') return alphabet.indexOf('ch');
    return alphabet.indexOf(lower);
};

const getShiftedChar = (index, isUpper) => {
    const shifted = alphabet[index];

    if (shifted === 'sh' || shifted === 'ch') {
        return isUpper ? shifted[0].toUpperCase() + shifted[1] : shifted;
    }

    return isUpper ? shifted.toUpperCase() : shifted;
};

const cezarEncrypt = (text, shift) => {
    const norm = normalizeText(text);
    let result = '';

    for (let i = 0; i < norm.length;) {
        let char = norm[i];
        let step = 1;

        
        if ((char === 'ş') || (char === 'ç') || (char === 'Ş') || (char === 'Ç')) {
            step = 1;
        }

        const isUpper = (char === char.toUpperCase());
        const index = getCharIndex(char);

        if (index === -1) {
            result += char; 
            i += step;      
        } else {
            const newIndex = (index + shift + alphabet.length) % alphabet.length;
            result += getShiftedChar(newIndex, isUpper);
            i += step;
        }
    }

    return denormalizeText(result);
};

const cezarDecrypt = (text, shift) => cezarEncrypt(text, -shift);

export default function CezarCipher() {
    const [text, setText] = useState('');
    const [shift, setShift] = useState();
    const [mode, setMode] = useState('encrypt');
    const [result, setResult] = useState('');

    const handleCipher = () => {
        if (!shift) {
            alert("Iltimas, gilt sózdi kirgiziń!");
            return;
          }
        const parsedShift = parseInt(shift);
        if (isNaN(parsedShift)) return;
        
        const output =
            mode === 'encrypt'
                ? cezarEncrypt(text, parsedShift)
                : cezarDecrypt(text, parsedShift);

        setResult(output);
    };

    return (
        <div className="w-full  flex flex-col md:flex-row">
            {/* Shep panel: Maǵliwmat */}
            <div className="w-full md:w-1/2 p-6 bg-white border-r overflow-auto">
                <CezarTheory />
            </div>

            {/* Oń panel: Kalkulyator */}
            <div className="w-full md:w-1/2 max-h-[calc(100vh-180px)] flex justify-center items-center">
            <div className="max-w-md mx-auto p-4 bg-gray-100 rounded shadow">
                <h2 className="text-xl font-bold mb-4">Cezar Shifrlaw Usılı(Qaraqalpaqsha)</h2>

                <textarea
                    className="w-full p-2 border rounded mb-4"
                    rows="4"
                    placeholder="Tekstti kiritiń."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />

                <input
                    type="number"
                    className="w-full p-2 border rounded mb-4"
                    placeholder="Jılıstırıw muǵdarı (K sani)"
                    value={shift}
                    onChange={(e) => setShift(e.target.value)}
                />

                <div className="flex gap-4 mb-4">
                    <button
                        className={`flex-1 p-2 rounded ${mode === 'encrypt' ? 'bg-blue-500 text-white' : 'bg-white border'
                            }`}
                        onClick={() => setMode('encrypt')}
                    >
                        Shifrlaw
                    </button>
                    <button
                        className={`flex-1 p-2 rounded ${mode === 'decrypt' ? 'bg-green-500 text-white' : 'bg-white border'
                            }`}
                        onClick={() => setMode('decrypt')}
                    >
                        Deshifrlaw
                    </button>
                </div>

                <button
                    className="w-full p-2 bg-black text-white rounded"
                    onClick={handleCipher}
                >
                    Esaplaw
                </button>

                <div className="mt-4 p-2 bg-white border rounded">
                    <strong>Nátiyje:</strong>
                    <p>{result}</p>
                </div>
            </div>
            </div>
        </div>

    );
}
