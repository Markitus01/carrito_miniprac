import { useContext } from "react"
import { CompresContext } from "../context/CompresContext";

export const Card = ({id,imatge,titol,categoria,descripcio,preu,puntuacio,vots}) =>
{
    const { llistaCompres, afegirCompra, eliminarCompra } = useContext(CompresContext);

    const f_afegirProducte = () =>
    {
        afegirCompra({id, imatge, titol, categoria, descripcio, preu, puntuacio, vots});
    };
    
    const f_treureProducte = () =>
    {
        eliminarCompra({id});
    }

    const estaAlCarro = llistaCompres.some(producte => producte.id === id);

    return(
        <div className="tarjeta">
            <img src={imatge} alt={titol} className="tarjeta-imagen"/>
            <div className="tarjeta-contenido">
                <h3 className="tarjeta-titulo">{titol}</h3>
                <p className="tarjeta-categoria">Categoría: {categoria}</p>
                <p className="tarjeta-descripcion">{descripcio}</p>
                <p className="tarjeta-precio">{preu}€</p>
                <p className="tarjeta-puntuacion">Puntuació: {puntuacio} ({vots} opinions)</p>
                {
                    estaAlCarro?
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