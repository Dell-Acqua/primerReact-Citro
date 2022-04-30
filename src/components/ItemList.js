import { useEffect, useState } from "react";
import { items as itemsData } from "./Items";
import ItemsCard from "./ItemsCard";

const ItemList = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
      const getItems = new Promise( (resolve, reject) => {
        setTimeout( () =>{
          resolve(itemsData)
          reject('error en la promesa')
        }, 2000)
      })
  
      getItems.then( (result) => {
        console.log('Se completó la promesa', result);
        setItems(result)
 
      }).catch((err) => {
          console.log('Hubo un error', err);
      })
  
      console.log('Se terminó el efecto');
    }, [])
  
    return (
        <>
   
      <div class="flex justify-center">  
        {items.map( item => <ItemsCard key={item.id} itemsData={item}/> )}
      </div>
      </>
    )
}
export default ItemList