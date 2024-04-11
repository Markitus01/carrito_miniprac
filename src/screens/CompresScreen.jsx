import { useContext } from "react";
import { Card } from "../Components/Card";
import '../styles/card.css';
import { ProductesContext } from "../context/ProductesContext";
import { CompresContext} from "../context/CompresContext"

export const CompresScreen = () =>{

    const{ productes } = useContext(ProductesContext);
    const {llistaCompres,afegirCompra,eliminarCompra,
        augmentarQuantitat,disminuirQuantitat} = useContext(CompresContext);

    const handleAfegir = (compra)=>{
        afegirCompra(compra);
    }
    const handleEliminar = (id)=>{
        eliminarCompra(id);
    }
    return(
        <>
            <h1>Llistat de productes</h1>
            {
                productes.map(p=>
                    <Card key={p.id}
                        imatge={p.image}
                        titol={p.title}
                        descripcio={p.description}
                        preu={p.price}
                        handleAfegir={() => handleAfegir(p)}
                        handleEliminar={()=>handleEliminar(p.id)}>
                    </Card>
                )
            }
        </>
    )
}