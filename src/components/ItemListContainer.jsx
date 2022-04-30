import portada from "./img/portada2.jpg"
import ItemList from "./ItemList"

const ItemListContainer = ({greeting}) => {
  return (
      <>
    <div class="flex justify-center mt-6 mb-8">
        <div class="text-5xl font-extrabold ...">
    <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-red-500">
    {greeting}
    </span>
    </div>
      </div>
    <div><img src={portada} alt="" width="100%"/></div>
    <div class="divider ">Productos Destacados</div>
    <div><ItemList/></div>

    </>
  )
}
export default ItemListContainer