import { GifItem } from "./GifItem";
import { useFetchGifs } from "../../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    //custom Hoook
   const { images, isLoading } = useFetchGifs( category);

   console.log( { images, isLoading } );

  return (
    
        <>
            <h3>{ category }</h3>
            {/*IF corto con una sola condicion - And Logico*/}
            { 
                isLoading && (<h2>Loading...</h2>)
            }
               
            {/* Aqui se mapea y genera la imagen, solo la imagen */}
            <div className="card-grid">
                {
                   images.map( ( image ) => (
                          <GifItem 
                            key={ image.id }
                            //Esparcir propiedades(Muchas Propiedades)
                            { ...image }
                          />                  
                   )) 
                }
            </div>
            
        </>
    
  )
}
