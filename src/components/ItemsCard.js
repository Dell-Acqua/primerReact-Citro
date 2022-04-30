
const ItemsCard = ({itemsData}) => {

  return (
<>
    <div class="px-5">
        <div class="card w-45 bg-base-100 shadow-xl image-full">
            <figure><img src={itemsData.pictureUrl} alt="item" /></figure>
            <div class="card-body">
                <h2 class="card-title">{itemsData.title}</h2>
                <p>{itemsData.description}</p>
                <h3>Precio:{itemsData.price}</h3>
                <div class="card-actions justify-center">
                <button class="btn btn-primary">Ver Producto</button>
                </div>
            </div>
        </div>
    </div>
</>
  )
}
export default ItemsCard