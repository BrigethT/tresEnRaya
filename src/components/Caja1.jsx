import React from "react";
function Caja1 (props){
    const {valor, seleccionarCajaTablero} = props;
    return(
        <button className="caja1" onClick={seleccionarCajaTablero}>{valor}</button>
    );
    //se puede conbianar las componentes de clase con las funcionales
    
}
export default Caja1;