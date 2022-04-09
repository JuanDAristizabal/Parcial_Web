import { useState } from 'react';
import '../Game.css';
import img from "../imgs/horca.png"
interface Props {
    handleStart(palabras: string[]): void;
}

const Game = (props: Props) => {
    const {handleStart} = props;
    const [palabras, setPalabras] = useState([""]);
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
            </div>
        </div>
        <div className="palabra">
            <h1>{setPalabras}</h1>
            {console.log(setPalabras)}
        </div>
    </div>
    );
};

export default Game;