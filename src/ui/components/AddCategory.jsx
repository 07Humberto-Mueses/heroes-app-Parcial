import { useState } from 'react';

//Recibimos la propiedad onNewCategory del componente padre
export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ( { target } ) =>{
        //console.log(target.value);
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        //Evaluamos que el valor no tenga espacios en blanco
        if(inputValue.trim().length <= 1) return;
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return (
        <form onSubmit ={ (event) => onSubmit(event)}>
                <input
                    type="text"
                    placeholder="Agregar imagenes"
                    value={inputValue}
                    onChange={ onInputChange }
                />
        </form>
  )
}
