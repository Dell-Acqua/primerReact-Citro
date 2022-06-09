import { useEffect, useState } from "react";
import ItemsCard from "./ItemsCard";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import { useParams } from "react-router-dom";

const ItemList = () => {
  const [items, setItems] = useState([])
  const {category} = useParams();


  const getItems = () => {

    if (category){     
        const db = getFirestore();

        const q = query(
          collection(db, "items"),
          where("category", "==", category)
        );

        getDocs(q).then((snapshot) => {
          if (snapshot.size === 0) {
            console.log("No hay resultados");
          }
          setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
        });
      } else {
        const db = getFirestore();
        const itemsData = collection(db, "items");

        getDocs(itemsData).then((snapshot) => {
          if (snapshot.size === 0) {
            console.log("No hay elementos");
          }
          setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
        })    
    }
  }

  useEffect(() => {
    getItems();
  }, [category])

          return (
      <div className="flex justify-center">
        { <div className="flex justify-center">  
           {items.map( item => <ItemsCard key={item.id} itemsData={item}/> )}

        </div>
        }
      </div>
    )

}
export default ItemList