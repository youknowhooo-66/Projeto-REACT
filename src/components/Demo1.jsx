import { useState } from "react";
import './Demo1.css'

function Demo1(){
    const [estado, setEstado] = useState(0)

    function IncrementarEstado(){
        setEstado(estado + 1)
    }
    let cornometro = 9
    function incrementarCornometro(){
        cornometro++
        console.log(cornometro);
    }
    function alertarUsuario() {
        alert('alert')
    }
    return(
        <div className="container-demo1">
            <h2>Demo1</h2>
            <button onClick={alertarUsuario}>Clica em mim</button>
            <button onClick={() => {alert('executei uma arrow function')}}>Ex Arrow Function</button>
            <div>
                Cornometro: {cornometro}
                <button onClick={incrementarCornometro}>+</button>
            </div>
            <div>
                estado: {estado}
                <button onClick={IncrementarEstado}>+</button>
            </div>
        </div>
    )
}
export default Demo1;