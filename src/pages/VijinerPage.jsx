import React, { useState } from "react";
import VigenereTheory from "../components/VigenereTheory";

const alphabet = [
  "a", "á", "b", "d", "e", "f", "g", "ǵ", "h", "x", "í", "i", "j",
  "k", "q", "l", "m", "n", "ń", "o", "ó", "p", "r", "s", "t", "u",
  "ú", "v", "w", "y", "z", "sh", "c", "ch"
];


const normalizeText = (text) => {
  return text
    .replace(/Sh/g, "Ş")
    .replace(/SH/g, "Ş")
    .replace(/Ch/g, "Ç")
    .replace(/CH/g, "Ç")
    .replace(/sh/g, "ş")
    .replace(/ch/g, "ç");
};

const denormalizeText = (text) => {
  return text
    .replace(/Ş/g, "Sh")
    .replace(/Ç/g, "Ch")
    .replace(/ş/g, "sh")
    .replace(/ç/g, "ch");
};

const getCharIndex = (char) => {
  const lower = char.toLowerCase();
  if (lower === "ş") return alphabet.indexOf("sh");
  if (lower === "ç") return alphabet.indexOf("ch");
  return alphabet.indexOf(lower);
};


const getShiftedChar = (index, isUpper) => {
  const shifted = alphabet[index];
  if (shifted === "sh" || shifted === "ch") {
    return isUpper ? shifted[0].toUpperCase() + shifted.slice(1) : shifted;
  }
  return isUpper ? shifted.toUpperCase() : shifted;
};

const vigenereCipher = (text, key, mode = "encrypt") => {
  if (!key) return text;

  const normText = normalizeText(text);
  const normKey = normalizeText(key).toLowerCase();

  let result = "";
  let keyIndex = 0;

  for (let i = 0; i < normText.length; i++) {
    const char = normText[i];
    const isUpper = char === char.toUpperCase();

    const charIndex = getCharIndex(char);

    if (charIndex === -1) {
      result += char;
      continue;
    }

    let keyChar;
    keyChar = normKey[keyIndex % normKey.length];
    const keyCharIndex = getCharIndex(keyChar);

    if (keyCharIndex === -1) {
      result += char;
      keyIndex++; 
      continue;
    }

    const alphabetLength = alphabet.length;
    let newIndex;

    if (mode === "encrypt") {
      newIndex = (charIndex + keyCharIndex) % alphabetLength;
    } else {
      newIndex = (charIndex - keyCharIndex + alphabetLength) % alphabetLength;
    }

    result += getShiftedChar(newIndex, isUpper);

    keyIndex++; 
  }

  return denormalizeText(result);
};

export default function VigenerePage() {
  const [text, setText] = useState("");
  const [key, setKey] = useState("");
  const [mode, setMode] = useState("encrypt");
  const [result, setResult] = useState("");

  const handleClick = () => {
    if (!key) {
      alert("Iltimas, gilt sózdi kirgiziń!");
      return;
    }
    const output = vigenereCipher(text, key, mode);
    setResult(output);
  };

  return (

    <div className="w-full  flex flex-col md:flex-row">
      {/* Shep panel: Maǵliwmat */}
      <div className="w-full md:w-1/2 p-6 bg-white md:border-r overflow-auto">
        <VigenereTheory />
      </div>

      {/* Oń panel: Kalkulyator */}
      <div className="w-full md:w-1/2 max-h-[calc(100vh-180px)] flex justify-center items-center">
        <div className="max-w-md max-h-max  mx-auto p-4 bg-gray-100 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Vijiner Shifrlaw Algoritmi(Qaraqalpaqsha)</h2>
          <textarea
            className="w-full p-2 border rounded mb-4"
            rows={4}
            placeholder="Tekstti kiritiń"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="text"
            className="w-full p-2 border rounded mb-4"
            placeholder="Gilt sóz"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
          <div className="flex gap-4 mb-4">
            <button
              className={`flex-1 p-2 rounded ${mode === "encrypt" ? "bg-blue-500 text-white" : "bg-white border"
                }`}
              onClick={() => setMode("encrypt")}
            >
              Shifrlaw
            </button>
            <button
              className={`flex-1 p-2 rounded ${mode === "decrypt" ? "bg-green-500 text-white" : "bg-white border"
                }`}
              onClick={() => setMode("decrypt")}
            >
              Deshifrlaw
            </button>
          </div>
          <button
            className="w-full p-2 bg-black text-white rounded"
            onClick={handleClick}
          >
           Esaplaw
          </button>
          <div className="mt-4 p-2 bg-white border rounded min-h-[80px] whitespace-pre-wrap">
            <strong>Nátiyje:</strong>
            <p>{result}</p>
          </div>
        </div></div>
    </div>
  );
}
