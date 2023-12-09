import { useEffect, useState } from "react"


export const useFetch = (url) => {

    const [character, setCharacter] = useState(null)

    const getCharacters = async() =>{
        const resp = await fetch(url)
        const data  = await resp.json()
       
        setCharacter(data)
    }

    useEffect(() => {
      getCharacters()
    }, [url])
    
    
    return {
    character
    }

   

}
