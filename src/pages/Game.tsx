import { useState } from 'react';
import Botones from '../components/Botones';
import '../Game.css';
import img from "../imgs/horca.png"
interface Props {
    selectedWord: String;
    correctLetters: String;
    wrongLetters: String[];
}

const Game = (props: Props) => {
    return (
    <div className='container'>
       <div className="texto">
            <h1><b>AHORCADO</b></h1>
            <h3>Encuentra la palabra - Ingrese una letra</h3>
        </div>
        <div className="medio">
            <div className="horca">
            <img src={img} alt="" className="s" />
                <div className="cuerpo">
                </div>
            </div>
            <div className="letras">
            {props.wrongLetters.length > 0 && <p>Wrong</p>}
            {props.wrongLetters.map((letter, i) => <span key={i}>{letter} - </span>)}
            </div>
        </div>
        <div className="palabra">
        {props.selectedWord.split('').map((letter, i) => {
        return (
          <span className="letter" key={i}>
            {props.correctLetters.includes(letter) ? letter : ' _ '}
          </span>
        )
      })}
        </div>
        <div className='botones'>
          <Botones />
        </div>
    </div>
    );
};

export default Game;