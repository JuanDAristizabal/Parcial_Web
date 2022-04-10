import { useState, useEffect } from "react";
interface ReturnValue {
  status: string;
//   handleClick: (index: number) => void;
//   handleRestart: () => void;
  handleStart: (palabras: string[]) => void;
}
export default (): ReturnValue => {
  const [status, setStatus] = useState("created");
  const [palabras, setPalabras] = useState([""]);
  const [selectedWord, setSelectedWord] = useState("");
  const [correctLetters, setCorrectLetters] = useState([""]);
  const [wrongLetters, setWrongLetters] = useState([""]);

  const handleStart = (palabras: string[]) => {
    setPalabras(palabras);
    setStatus("started");
  };
  const handleRestart = () => {
    setStatus("created");
  };

  return {status, handleStart};
};