import { useState, useMemo, FormEvent } from "react";
interface Props {
  handleStart(players: string[]): void;
}
const Start = (props: Props) => {
  const { handleStart } = props;
  const [palabras, setPalabra] = useState([""]);
  const handleInput = (event: FormEvent<HTMLInputElement>, index: number) => {
    const newPalabra = [...palabras];
    // newPalabra.splice(index, 1, event.currentTarget.value);
    setPalabra(newPalabra);
  };
//   const canStart = useMemo(
//     () => palabras.every((palabra) => palabra.length > 0),
//     [palabras]
//   );
//   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (!canStart) return;
//     handleStart(players);
//   };
//   return (
//     <div>
//       <h1>React Triki</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="player1">Jugador 1</label>
//           <input
//             type="text"
//             value={players[0]}
//             onInput={(e) => handleInput(e, 0)}
//           />
//         </div>
//         <div>
//           <label htmlFor="player2">Jugador 2</label>
//           <input
//             type="text"
//             value={players[1]}
//             onInput={(e) => handleInput(e, 1)}
//           />
//         </div>
//         <div>
//           <button type="submit" disabled={!canStart}>
//             Iniciar
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };
// export default Start;