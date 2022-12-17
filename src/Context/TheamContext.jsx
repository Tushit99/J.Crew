import React, { createContext, useState } from 'react'

export const TheamContext = createContext(); 

const TheamContextProvider = ({children}) => {
    const [back, setBack] = useState(false); 

    const change=()=>{
        setBack(!back); 
    }

  return ( 
    <TheamContext.Provider value={{back, change}}>
        {children}
    </TheamContext.Provider>
  )
}

export default TheamContextProvider 