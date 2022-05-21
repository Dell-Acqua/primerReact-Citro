import { useState } from "react"
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";




const ItemCount = ({initial, stock, agregado}) => {

    const [ctd, setCtd] = useState(initial);
    const [mostrarBoton, setMostrarBoton] = useState(false);



    const agregarProducto = (num) => {
        setCtd(ctd+num);
    };

  return (
    <div>
        <div className="pb-2">
            <button className="btn btn-circle btn-outline" onClick={() => agregarProducto(-1)} disabled={ctd === initial ? true : null}>-</button>
            <div className="avatar placeholder px-2">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                    <span className="text-xs">{ctd}</span>
                </div>
            </div>
            <button className="btn btn-circle" onClick={() => agregarProducto(+1)} disabled={ctd === stock || stock === 0 ? true : null}>+</button>
        </div>
        { stock === 0 && <h3>No hay stock</h3>}
        <button className="btn btn-success" onClick={() => {agregado(ctd); setMostrarBoton(true)}} disabled={stock === 0 ? true : null}>Agregar al Carrito</button>

        <div className="pt-5">
        {(mostrarBoton) && <Link to="/carrito" className="btn btn-outline btn-success">Terminar mi compra<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg></Link>
        }
        </div>
    </div>
  )
}
export default ItemCount