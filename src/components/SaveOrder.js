import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const SaveOrder = ({}) => {  

    const cartContext = useContext(CartContext);
    const {carrito, setTotal, borrarCarrito} = cartContext;
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const saveOrder = () => {

        const array = carrito.map(item => {return ({id:item.id, title:item.title, price:item.price, cantidad:item.ctd}) });
        const items = Object.assign({}, array);
        
        const order = {
            buyer: {'name': nombre ,'email': email, 'phone':phone},
            items: items,
            total: setTotal(),
        }
            
        saveToFirestore(order);

    }

    const saveToFirestore = (order) => {
        const db = getFirestore()
        const orderCollection = collection(db, 'orders')

        addDoc(orderCollection, order).then( (response) => {
            const  orderId = response.id
            console.log(orderId);
       })
    }

  return (
    <div>
        <h3 className="stat-value">Ingresa Tus Datos</h3>
        <div className="flex justify-center py-5">
            <div>            
                <input type="text" placeholder="Nombre" className="input input-bordered input-success w-full max-w-xs" onChange={event => setNombre(event.target.value)}/>
            </div>       
        </div>
        <div className="flex justify-center pb-5">
            <div>            
                <input type="text" placeholder="Email" className="input input-bordered input-success w-full max-w-xs" onChange={event => setEmail(event.target.value)}/>
            </div>       
        </div>
        <div className="flex justify-center pb-5">
            <div>            
                <input type="number" placeholder="Teléfono" className="input input-bordered input-success w-full max-w-xs" onChange={event => setPhone(event.target.value)}/>
            </div>       
        </div>
        <div className="flex justify-center pb-5">
            <div>            
                <a href="#finalizar" className="btn btn-success"  onClick={saveOrder}>Enviar Compra</a>
            </div>  
            <div className="modal" id="finalizar">
          <div className="modal-box">
            <h3>Compra realizada con Exito</h3>
            <div className="modal-action">
            <a href="/" className="btn btn-success" onClick={borrarCarrito}>Genial!</a>
         </div>
          </div>

      </div>     
        </div>

    </div>
  )
}
export default SaveOrder