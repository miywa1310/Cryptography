import React, { useState } from "react";
import AffineTheory from "../components/AffineTheory";

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
  const char = alphabet[index];
  if (char === "sh" || char === "ch") {
    return isUpper ? char[0].toUpperCase() + char.slice(1) : char;
  }
  return isUpper ? char.toUpperCase() : char;
};

const modInverse = (a, m) => {
  a = ((a % m) + m) % m;
  for (let x = 1; x < m; x++) {
    if ((a * x) % m === 1) return x;
  }
  return -1;
};

const affineCipher = (text, a, b, mode = "encrypt") => {
  const m = alphabet.length;
  const normText = normalizeText(text);
  let result = "";

  if (mode === "decrypt") {
    const a_inv = modInverse(a, m);
    if (a_inv === -1) return "A parametri mǝnindegi qarama-qarsiligi joq!";

    for (let i = 0; i < normText.length; i++) {
      const char = normText[i];
      const isUpper = char === char.toUpperCase();
      const index = getCharIndex(char);
      if (index === -1) {
        result += char;
        continue;
      }
      const decodedIndex = ((a_inv * (index - b + m)) % m + m) % m;
      result += getShiftedChar(decodedIndex, isUpper);
    }
  } else {
    for (let i = 0; i < normText.length; i++) {
      const char = normText[i];
      const isUpper = char === char.toUpperCase();
      const index = getCharIndex(char);
      if (index === -1) {
        result += char;
        continue;
      }
      const encodedIndex = (a * index + b) % m;
      result += getShiftedChar(encodedIndex, isUpper);
    }
  }

  return denormalizeText(result);
};

export default function AffinePage() {
  const [text, setText] = useState("");
  const [a, setA] = useState();
  const [b, setB] = useState();
  const [mode, setMode] = useState("encrypt");
  const [result, setResult] = useState("");

  const handleClick = () => {
    if (!a || isNaN(a) || !b || isNaN(b)) {
      alert("A hám B parametirlerin duris kiritiń");
      return;
    }
    const output = affineCipher(text, parseInt(a), parseInt(b), mode);
    setResult(output);
  };

  return (
    <div className="w-full flex flex-col md:flex-row">
      {/* Shep panel: Maǵliwmat */}
      <div className="w-full md:w-1/2 p-6 bg-white border-r overflow-auto">
        <AffineTheory />
      </div>

      {/* Oń panel: Kalkulyator */}
      <div className="w-full md:w-1/2 max-h-[calc(100vh-180px)] flex justify-center items-center">
        <div className="max-w-md max-h-max mx-auto p-4 bg-gray-100 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Afin Shifrlaw Algoritmi (Qaraqalpaqsha)</h2>
          <textarea
            className="w-full p-2 border rounded mb-4"
            rows={4}
            placeholder="Tekstti kiritiń"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="number"
            className="w-full p-2 border rounded mb-2"
            placeholder="a parametri"
            value={a}
            onChange={(e) => setA(e.target.value)}
          />
          <input
            type="number"
            className="w-full p-2 border rounded mb-4"
            placeholder="b parametri"
            value={b}
            onChange={(e) => setB(e.target.value)}
          />
          <div className="flex gap-4 mb-4">
            <button
              className={`flex-1 p-2 rounded ${mode === "encrypt" ? "bg-blue-500 text-white" : "bg-white border"}`}
              onClick={() => setMode("encrypt")}
            >
              Shifrlaw
            </button>
            <button
              className={`flex-1 p-2 rounded ${mode === "decrypt" ? "bg-green-500 text-white" : "bg-white border"}`}
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
        </div>
      </div>
    </div>
  );
}