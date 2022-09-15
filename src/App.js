
import './App.css';
import {useEffect, useState} from "react";


function App() {
  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [size, setSize] = useState(400);
  const [bgColor, setBgColor] = useState("ffffff");
  const [qrCode, setQrCode] = useState("");

  // Alterando a URL somente quando o usuário altera a entrada
  useEffect(() => {
    setQrCode
    (`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`);
  }, [word, size, bgColor]);

  function handleClick() {
    setWord(temp);
  }

  return (
      <div className="App">
        <h1>Gerador de Qr Code</h1>
        <div className="input-box">
          <div className="gen">
            <input type="text" onChange={
              (e) => {setTemp(e.target.value)}}
                   placeholder="Insira a informação" />
            <button className="button"
                    onClick={handleClick}>
              Gerar
            </button>
          </div>
          <div className="extra">
            <h5>Background Color:</h5>
            <input type="color" onChange={(e) =>
            { setBgColor(e.target.value.substring(1)) }} />
            <h5>Tamanho:</h5>
            <input type="range" min="200" max="600"
                   value={size} onChange={(e) =>
            {setSize(e.target.value)}} />
          </div>
        </div>
        <div className="output-box">
          <img src={qrCode} alt="" />
          <a href={qrCode} download="QRCode">
            <button type="button">Download</button>
          </a>
        </div>
      </div>
  );
}

export default App;
