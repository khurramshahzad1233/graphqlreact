import React,{createContext, useContext} from 'react';
const Usercontext=createContext();

const Userprovider = ({children}) => {

    
    
  return (
    <Usercontext.Provider value={{ }}>
        {children}
    </Usercontext.Provider>
  )
};

export const Userstate=()=>{
    return useContext(Usercontext)
}

export default Userprovider   