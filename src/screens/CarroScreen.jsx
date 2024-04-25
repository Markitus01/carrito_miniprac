import { useContext } from "react";
import { CompresContext } from "../context/CompresContext";

export const CarroScreen = () => {
    const { llistaCompres, afegirCompra, eliminarCompra, augmentarQuantitat, disminuirQuantitat } = useContext(CompresContext);

    const calcularTotal = () => {
        return llistaCompres.reduce((total, item) => total + item.preu * item.quantitat, 0).toFixed(2);
    };

    const handleImpressio = () => {
        print();
    };

    // console.log(llistaCompres);

    return (
    <>
        <h1>Compres</h1>
        {llistaCompres.length > 0 ? ( // Comprobem si hi hna productes
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Nom</th>
                    <th scope="col">Preu</th>
                    <th scope="col">Quantitat</th>
                    <th scope="col">Esborrar</th>
                </tr>
                </thead>
                <tbody>
                {llistaCompres.map((p) => (
                    <tr key={p.id}>
                    <th scope="row">{p.titol}</th>
                    <td>{p.preu}</td>
                    <td>
                        <button className="btn btn-outline-primary" onClick={() => disminuirQuantitat(p.id)}>
                        -
                        </button>
                        <button className="btn btn-primary">{p.quantitat}</button>
                        <button className="btn btn-outline-primary" onClick={() => augmentarQuantitat(p.id)}>
                        +
                        </button>
                    </td>
                    <td>
                        <button className="btn btn-danger" onClick={() => eliminarCompra(p.id)}>
                        Esborrar
                        </button>
                    </td>
                    </tr>
                ))}
                <tr>
                    <th>TOTAL: </th>
                    <td></td>
                    <td></td>
                    <td>{calcularTotal()} €</td>
                </tr>
                </tbody>
            </table>
        ) : (
            <h4 className="text-center">No hi ha productes al carro.</h4> 
        )}
        <div className="d-grid gap-2">
            <button className="btn btn-primary" disabled={llistaCompres.length > 0 ? false : true} onClick={handleImpressio}>COMPRAR</button>
        </div>
    </>
  );
};