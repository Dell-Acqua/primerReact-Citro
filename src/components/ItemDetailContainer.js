import { doc, getDoc, getFirestore,} from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {
   const {id} = useParams()
   const [item, setItem] = useState( [] )

    useEffect(() => {
        const db = getFirestore();

        const itemDetail = doc(db, "items", id);
        getDoc(itemDetail).then((snapshot) => {
            if (snapshot.exists()) {
                setItem({id: snapshot.id, ...snapshot.data()});
            }
        });
    }, []);

     return (
      <>
      <div className="flex justify-center">

      <div><ItemDetail itemsData={item}/></div>
          
      </div>
         
      </>

  )

}
export default ItemDetailContainer