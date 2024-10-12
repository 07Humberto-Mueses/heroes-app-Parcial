import React from 'react'
import { useState } from "react";
import { AddCategory, GifGrid } from "../../ui"

export const DcPage = () => {

  const [categories, setCategories] = useState([''])

    const onAddCategory = ( NewCategory ) => {
      if( categories.includes( NewCategory )) return;
      setCategories([NewCategory, ...categories]);
    }
  return (
    <>
      {/* Panel de busqueda y agregar categoria */}
        <AddCategory
          onNewCategory = {onAddCategory}
        />

        {/* Dibija lo que se busca */}
        {   
          categories.map( ( category ) =>(
              <GifGrid
                key={ category } 
                category={ category }
              />  
          ))
        }
    </>
  )
}
