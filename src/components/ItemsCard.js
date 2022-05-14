
import { Link } from "react-router-dom"



const ItemsCard = ({itemsData}) => {





  return (
<>
    <div className="px-5">
        <div className="card w-45 bg-base-100 shadow-xl image-full">
            <figure><img src={itemsData.pictureUrl} alt="item" /></figure>
            <div className="card-body">
                <h2 className="card-title">{itemsData.title}</h2>
                <p>{itemsData.description}</p>
                <h3>Precio: ${itemsData.price}</h3>
                <div className="card-actions justify-center">
                <Link to={`/item/${itemsData.id}`} className="btn btn-primary">Ver Producto</Link>
                </div>
            </div>
        </div>
    </div>
</>
  );
};
export default ItemsCard