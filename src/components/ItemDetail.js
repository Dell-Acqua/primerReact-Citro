

const ItemDetail = ({itemsData}) => {
  return (
      <>    
      
      
    <div className="bg-white">
    <div className="pt-6">
        
        {/* <!-- Info producto --> */}
        <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{itemsData.title}</h1>
        </div>

        {/* <!-- Opciones --> */}
        <div className="mt-4 lg:mt-0 lg:row-span-3">
        <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
           <img src={itemsData.pictureUrl} alt="" className="object-center object-cover"></img>
        </div>
      
            <p className="text-3xl text-gray-900">{itemsData.price}</p>

           
          
               <button className="btn btn-success mx-3">Agregar al Carrito</button>
     
        </div>

        <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            {/* <!-- Descripcion y detalles --> */}
            <div>
            <h3 className="">Descripción</h3>

            <div className="space-y-6">
                <p className="text-base text-gray-900">{itemsData.description}</p>
            </div>
            </div>

        </div>
        </div>
    </div>
    </div>

         
      </>

  )
}
export default ItemDetail