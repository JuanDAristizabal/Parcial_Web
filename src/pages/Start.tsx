import '../Start.css';
import img from "../imgs/Ahorcado_Inicio.png"
import { useState, useMemo, FormEvent } from "react";
interface Props {
  handleStart(palabras: string[]): void;
}

const Start = (props: Props) => {
  const { handleStart } = props;
  const [palabras, setPalabra] = useState([""]);
  const handleInput = (event: FormEvent<HTMLInputElement>, index: number) => {
    const newPalabra = [...palabras];
    newPalabra.splice(index, 1, event.currentTarget.value);
    setPalabra(newPalabra);
  };
  const canStart = useMemo(
    () => palabras.every((palabra) => palabra.length > 0),
    [palabras]
  );
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canStart) return;
    handleStart(palabras);
  };
  return (
    <div className="container">
      <div className="texto">
        <h1>React Ahorcado</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <br />
        <div className='palab'>
          <label htmlFor="palabra">Palabra</label>
          <input
            type="text"
            value={palabras[0]}
            onInput={(e) => handleInput(e, 0)}
            className="LabelP"
          />
        </div>
        <br />
        <div className='boton'>
          <button type="submit" disabled={!canStart}>
            Iniciar
          </button>
        </div>
      </form>
      <br />
      <br />
      <div className="imagen">
        <img src={img} alt="" className="s" />
      </div>
    </div>
  );
};
export default Start;