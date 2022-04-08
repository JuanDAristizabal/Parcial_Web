import '../Start.css';
import img from "../ahorcado.jpg"
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
          />
        </div>
        <br />
        <div className='boton'>
          <button type="submit" disabled={!canStart}>
            Iniciar
          </button>
        </div>
        <img src="{img}" alt="" />
      </form>
    </div>
  );
};
export default Start;