import React from "react"
import Gif from "./Gif"
import { useEffect, useState } from "react";
import getGifs from "../services/getGifs"

export default function ListOfGifs ({params}) {
    const { keyword } = params
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(function () {
        setLoading(true)
        getGifs({ keyword })
            .then(gifs => 
                setGifs(gifs),
                setLoading(false)        
        )
    }, [keyword]);

    if(loading) return <i>Cargando...</i>

    return <div>
            {
                gifs.map(({id, title, url}) => 
                <Gif 
                    key={id} 
                    title={title} 
                    id={id} 
                    url={url} 
                />)
            }
            </div>
      
}




