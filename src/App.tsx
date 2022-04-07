
import './App.css';

function App() {
  return (
    // <div className="App">
      <div className='container'>
        <div className="texto">
        <h1><b>AHORCADO</b></h1>
        <h3>Encuentra la palabra - Ingrese una letra</h3>
        </div>
        <div className="medio">
        <div className="horca">
          <div className="cuerpo">
           <b className="cabeza">O</b>
           <b className="tronco">l</b>
           <b className="tronco2">l</b>
           <b className="pataderec">/</b>
           <b className="pataizq">\</b>
           <b className="brazodere">/</b>
           <b className="brazoizq">\</b>
          </div>
        </div>
        <div className="palabra">
        </div>
        </div>
        <div className="letras">
        </div>
      </div>
    /* </div> */
  );
}

export default App;
