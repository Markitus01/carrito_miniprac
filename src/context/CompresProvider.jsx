import { useReducer } from "react";
import { CompresContext } from "./CompresContext";

const initialState=[];

export const CompresProvider = ({children}) =>{
    const compresReducer = (state = initialState, action={}) =>{
        switch(action.type){
            case '[CARRO] Afegir Compra':
                return [...state, action.payload];
            case '[CARRO] Esborrar Compra':
                return state.filter(p => p.id !== action.payload);
            case '[CARRO] Augmentar Quantitat Compra':
                return state.map(item => 
                {
                    const qt = item.quantitat+1;

                    if (item.id === action.payload)
                    {
                        return { ...item, quantitat:qt }
                    }
                    else
                    {
                        return item;
                    }
                });
            case '[CARRO] Disminuir Quantitat Compra':
                return state.map(item => 
                {
                    const qt = item.quantitat-1;

                    if (item.id === action.payload && item.quantitat > 1)
                    {
                        return { ...item, quantitat:qt }
                    }
                    else
                    {
                        return item;
                    }
                });
            default:
                break;
        }
    }
    //dispatch serveix per a passar un objecte
    const [llistaCompres, dispatch] = useReducer(compresReducer, initialState);
    /**
     * el useReucer permetrá l'ús i gestió de diferents mètodes
     * En concret per afegir i treure un producte del cistell:
     *      afegirCompra
     *      eliminarCompra
     * I per modificar la quantitat de cada producte del cistell:
     *      augmentarQuantitat
     *      disminuirQuantitat
     */
    const afegirCompra = (compra) =>{
        compra.quantitat = 1;
        const action={
            type:'[CARRO] Afegir Compra',
            payload:compra
        }
        dispatch(action)
    }
    const eliminarCompra = (id) =>{
        const action={
            type:'[CARRO] Esborrar Compra',
            payload:id
        }
        dispatch(action)
    }
    const augmentarQuantitat = (id) =>{
        const action={
            type:'[CARRO] Augmentar Quantitat Compra',
            payload:id
        }
        dispatch(action)
    }
    const disminuirQuantitat = (id) =>{
        const action={
            type:'[CARRO] Disminuir Quantitat Compra',
            payload:id
        }
        dispatch(action)
    }
    return(
        <CompresContext.Provider value={{llistaCompres,afegirCompra,eliminarCompra,augmentarQuantitat,disminuirQuantitat}}>
            {children}
        </CompresContext.Provider>
    )
}