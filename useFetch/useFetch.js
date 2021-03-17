import React, {useState, useEffect, useRef} from 'react'

export const useFetch = (url) => {

    //useRef es del tema RealExampleRef
    const isMounted = useRef(true);
    const [state, setState] = useState({data: null, loading: true, error: null});

    //Este useEffect solo funcionara para que cuando se desmonte el componente isMounted cambie su valor
    useEffect(() => {
        
        return () => {
            isMounted.current = false;    
        }
    }, [])


    useEffect(() => {

        setState({...state, data: null, loading: true,});
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                    if(isMounted){
                        setState({
                            loading: false,
                            error: null,
                            data,
                        })
                    }
            })
            .catch(() => {
                setState({
                    data: null,
                    loading: false,
                    error: 'No se pudo cargar la información',
                })
            });
        
    }, [url])

    return state;

}
