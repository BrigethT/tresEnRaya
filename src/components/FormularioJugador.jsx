import React, {useState} from "react"; //importar el hook useState


function FormularioJugador(props){
    const {numeroJugador, registrarNombreJugador} = props;
    const[nombreJugador, setNombreJugador] = useState(null); //variable de estado inicializado en null
    const[errorNombreJugador, setErrorNombreJugador] = useState(null); //variable de estado inicializado en false
    const manejadorNombreUsuario = (e) => {
        setNombreJugador(e.target.value);
        if(e.target.value.length <=5){
            setErrorNombreJugador("El nombre de usuario debe tener al menos 6 caracteres");
        }else{
            setErrorNombreJugador(null);
        }
    }

    const registrarJugador = (e) => {
        e.preventDefault();
        registrarNombreJugador(nombreJugador);
    }
    
    return(
        <form onSubmit={(e)=>{registrarJugador(e)}}>
       <label htmlFor="nombreUsuario"> Nombre de usuario del jugador :{numeroJugador} </label>
        <input type="text" name="nombreusuario" id="nombreusuario" value={nombreJugador} onChange={manejadorNombreUsuario} /> 
        <input type="submit" value="Agregar" /> 
        <div className="errorNombreUsuario">{errorNombreJugador}</div>
        </form>
        
    );

}


export default FormularioJugador