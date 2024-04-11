import { ProductesContext } from "./ProductesContext"
import { useEffect, useState } from "react";

export const ProductesProvider = ({children}) =>{
    const[productes, setProductes]=useState([])
    const fetchProductes = async() => {
        const response= await fetch("https://fakestoreapi.com/products");
        const data=await response.json();
        console.log(data);
        setProductes(data)
    }
    useEffect( ()=>{
        fetchProductes();
    },[]);

    return(
        <ProductesContext.Provider value={{productes}}>
            {children}
        </ProductesContext.Provider>
    )
}