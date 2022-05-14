import { createContext, useState } from "react";

export const CartContext = createContext(null);

const CartProvider = (props) => {

    const [carrito, setCarrito] = useState([]);
  


    const agregarAlCarrito = (itemsData, ctd) => {
        if(carrito.some(i => i.id === itemsData.id)){
            let index = carrito.findIndex(i => i.id === itemsData.id);
            let producto = carrito[index];
            producto.ctd = producto.ctd + ctd;

            const nuevoCarrito = [...carrito];
            nuevoCarrito.splice(index,1,producto);
            setCarrito([...nuevoCarrito]);
            console.log(nuevoCarrito);

        }else{
            let producto = {...itemsData,ctd};
            setCarrito([...carrito,producto]);
         }
    }
    const borrarCarritoPorId = (id) => {
        const nuevoCarrito = [...carrito];
        let index = nuevoCarrito.findIndex(i => i.id === id);
        nuevoCarrito.splice(index,1);
        setCarrito([...nuevoCarrito])
    }
    const borrarCarrito = () => {
        setCarrito([]);
    }


  return (
    <CartContext.Provider 
        value={{carrito,setCarrito,agregarAlCarrito,borrarCarritoPorId,borrarCarrito}}>
        {props.children}
    </CartContext.Provider>
  )
}
export default CartProvider