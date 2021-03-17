//Este hook recibe un estado inicial en forma de objeto
//Usar un useState que usa el estado inicial que se envio para asignarlo a values
//Retornara values y handleInputChange, donde values sera el valor en forma de objeto
//handleInputChange sera la funcion que usaremos en el evento onChange de un input, select , etc
//donde emparejara al target.name para asignarle el valor de target.value, en donde [target.name]
//sera el valor respectivo del campo name dentro del input a relacionar con el valor 
//contenido en el estado inicial 

import React, { useState } from 'react'

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState);
    }

    const handleInputChange = ({target}) => { 
        
        setValues({
            ...values,
            [ target.name ]: target.value 
        })

    }

    return[ values, handleInputChange, reset ];

}
