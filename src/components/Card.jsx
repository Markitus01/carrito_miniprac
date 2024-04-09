export const Card = ({img, title, desc, price}) =>
{
    return(
        <div className="tarjeta">
            <img src={img} alt={title} className="tarjeta-image"></img>
            <div className="tarjeta-contenido">
                <h3 className="tarjeta-titulo">{title}</h3>
                <p className="tarjeta-descripcion">{desc}</p>
                <p className="tarjeta-precio">{price}</p>
            </div>
        </div>
    )
}