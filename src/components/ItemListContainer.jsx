import portada from "./img/portada2.jpg"
import ItemList from "./ItemList"

const ItemListContainer = ({greeting}) => {
  return (
      <>
    <div className="flex justify-center mt-6 mb-8">
        <div className="text-5xl font-extrabold ...">
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-red-500">
    {greeting}
    </span>
    </div>
      </div>
    <div><img src={portada} alt="" width="100%"/></div>
    <div className="divider ">Productos Destacados</div>
    <div><ItemList/></div>

    </>
  )
}
export default ItemListContainer