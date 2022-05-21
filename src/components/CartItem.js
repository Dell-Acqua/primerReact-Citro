

const CartItem = ({item, borrarCarritoPorId}) => {
  return (
      <><div key={item.id} className="py-1">
         <div className="card w-96 card-side bg-base-100 shadow-xl">
          <figure><img src={item.image}></img></figure>
          <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <p>${item.price}</p>
            <p>Cantidad: {item.ctd}</p>
            <p>Total: ${item.ctd * item.price}</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={()=>borrarCarritoPorId(item.id)}>Eliminar</button>
            </div>
        </div>
        </div>
        </div>
    </>
  )
}
export default CartItem