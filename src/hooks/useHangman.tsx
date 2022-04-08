import { useState, useEffect } from "react";
interface ReturnValue {
  status: string;
  palabra: string;
//   winner: string | null;
//   handleClick: (index: number) => void;
//   handleRestart: () => void;
  handleStart: (palabras: string[]) => void;
}
export default (): ReturnValue => {
//   const [winner, setWinner] = useState<string | null>(null);
  const [palabra, setPalabra] = useState("");
  const [status, setStatus] = useState("created");
  const [palabras, setPalabras] = useState([""]);

  useEffect(() => {
    if (status !== "started") return;
    
    let winner: string | null = null;
    
  }, [palabras, status]);

  const handleStart = (palabras: string[]) => {
    setPalabras(palabras);
    setStatus("started");
  };
  const handleRestart = () => {
//     setWinner("");
    setStatus("created");
  };

  // return { board, status, winner, handleClick, handleRestart, handleStart };
  return {status, palabra, handleStart};
};