import { useEffect, useState } from "react";
import { items as itemsData } from "./Items";
import ItemsCard from "./ItemsCard";

const ItemList = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState( true )
   useEffect(() => {
    getItems().then( data => {
    setItems( data )
    setLoading( false )
      })
   }, [])

    const getItems = () => {
      return new Promise( (resolve, reject) => {
        setTimeout(() => {
          resolve(itemsData)
        }, 2000);
      })
    }

    return (
      <div className="flex justify-center">
        { loading ?
        <>      
        <progress className="progress w-56 pxy-5"></progress>
        <br></br>
        </>       
        :
              <div className="flex justify-center">  
           {items.map( item => <ItemsCard key={item.id} itemsData={item}/> )}

        </div>
        }
      </div>
    )
}
export default ItemList