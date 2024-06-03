import React, { useState } from "react";
import Caja1 from "./Caja1";
import "../style/caja1.css"
import FormularioJugador from "./FormularioJugador";
//aparece los hooks que se comporta como un estado
function Tablero (){
    //primera forma
    //useState := hook
    const [ valoresTablero, setValoresTablero ] = useState([null, null, null,null,null,null,null,null,null]); //destructuracion de vectores, 
    const [jugador, setJugador] = useState(1);
    const [nombreJugador1, setNombreJugador1] = useState(null);
    const [nombreJugador2, setNombreJugador2] = useState(null);
    
    //segunda forma
    /*
    const [ state, setState] = useState({
        valoresTablero: [null, null, null,null,null,null,null,null,null],
        jugador: 1
    });*/
    const seleccionarCajaTablero = (indice) => {
        if(valoresTablero[indice]) {
            return;
        }
        const copiaValoreTablero = valoresTablero.slice(); //  hace una copia del tablero
        //const copiaValoreTablero = [...this.state.valoresTablero]; hace una copia del objeto
        if(jugador === 1){
            copiaValoreTablero[indice] = 'X';
            setJugador(2);
        }else{
            copiaValoreTablero[indice] = 'O';
            setJugador(1);
        }
        //copiaValoreTablero[indice] = "X";
        setValoresTablero(copiaValoreTablero);
    }
    
    //nuevo metodo de clase
    const calculateWinner = (squares) => {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];//retornara X o O dependiendo del ganador
          }
        }
        return null;//retorna null si no hay ganador o si aun no se termina el juego
    }
    
    let turno ;
    let resultado= calculateWinner(valoresTablero);// en valoresTablero estan los valores de cada ventana 
    if(resultado==='X'){
        turno="Ganador: Jugador 1(X)";
    }else if(resultado==='O'){
        turno = "Ganador: Jugador 2(O)";
    }else{
        turno = "Siguiente turno: "+ (jugador === 1? nombreJugador1:nombreJugador2);
    }
    return(


        <>
        <FormularioJugador numeroJugador={1} registrarNombreJugador = {setNombreJugador1}></FormularioJugador>
        <FormularioJugador numeroJugador={2} registrarNombreJugador = {setNombreJugador2}></FormularioJugador>


        <div>
                {valoresTablero.slice(0,3).map((caja, i) =>{
                return(
                    <Caja1 key= {i} valor={caja} seleccionarCajaTablero ={()=>seleccionarCajaTablero(i)}></Caja1>
                );
            })} 
            </div>
            <div>
                {valoresTablero.slice(3,6).map((caja, i) =>{
                return(
                    <Caja1 key= {i} valor={caja} seleccionarCajaTablero ={()=>seleccionarCajaTablero(i+3)}></Caja1>
                );
            })} 
            <div>{valoresTablero.slice(6,10).map((caja, i) =>{
                return(
                    <Caja1 key= {i} valor={caja} seleccionarCajaTablero ={()=>seleccionarCajaTablero(i+6)}></Caja1>
                );
            })} 
            </div>
            </div>
            <div>
                <h2>{turno}</h2>
            </div>
        </>
    );
    
}
export default Tablero;

