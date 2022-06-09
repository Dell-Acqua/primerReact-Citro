import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext"
import CartItem from "./CartItem";



const CartListItem = () => {
    const cartContext = useContext(CartContext);
    const {carrito, borrarCarrito, borrarCarritoPorId} = cartContext;
    
  return (
    <div className="grid grid-cols-3 gap-4">
      <div></div>
      <div className="">
        {carrito ? (carrito.map(producto => {
            return ( <CartItem key={producto.id} item={producto} borrarCarritoPorId={borrarCarritoPorId}/>);
        })): <p>Cargando Items</p>} 
        {carrito.length ? (<><div className="flex justify-center py-5"><button onClick={borrarCarrito} className="btn btn-sm btn-error">Vaciar Carrito</button></div>
        <div className="flex justify-center py-5"><Link to="/saveorder" className="btn btn-sm btn-success">Finalizar Compra</Link></div>
        </>
        )
        : <p className="stat-title">Carrito Vacio</p>}
        </div>
        <div></div>
    </div>
  )
}
export default CartListItem