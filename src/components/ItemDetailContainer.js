import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { items } from "./Items"

const ItemDetailContainer = () => {
   const {id} = useParams()
   const [item, setItem] = useState( {} )
   const [loading, setLoading] = useState( true )

   useEffect( () => {
       
       (async () => {
        const items = await getItemDetail()
        setItem(items)
        setLoading( false )
       })()
      
   }, [id])
   const getItemDetail = () => {
       return new Promise((resolve) => {
           setTimeout(()=> {
            resolve(items.find( i => i.id == id))
           }, 2000);
       })
   }


  return (
      <>
      <div className="flex justify-center">
          { loading ?
        <progress className="progress w-56 pxy-5"></progress>
        :
      <div><ItemDetail itemsData={item}/></div>
          }
      </div>
         
      </>

  )
}
export default ItemDetailContainer