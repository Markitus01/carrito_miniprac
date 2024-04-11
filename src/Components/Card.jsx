import { useState } from "react"

export const Card=({imatge,titol,descripcio,preu,handleAfegir,handleEliminar})=>{
    const[added,setAdded]=useState(false);
    const f_afegirProducte=()=>{
        handleAfegir();
        setAdded(true);
    }
    const f_treureProducte=()=>{
        handleEliminar();
        setAdded(false);
    }
    return(
        <div className="tarjeta">
            <img src={imatge} alt={titol} className="tarjeta-imagen"/>
            <div className="tarjeta-contenido">
                <h3 className="tarjeta-titulo">{titol}</h3>
                <p className="tarjeta-descripcion">{descripcio}</p>
                <p className="tarjeta-precio">{preu}</p>
                {
                    added?
                        <button className="boton-quitar"
                        onClick={f_treureProducte}>Treure del cistell</button>
                        :
                        <button className="boton-agregar"
                        onClick={f_afegirProducte}>Afegir al cistell</button>
                }
            </div>
        </div>
    )
}