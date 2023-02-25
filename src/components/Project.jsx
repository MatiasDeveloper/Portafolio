


export function Project (props) {
    return (
        <div className="neomorphismo Proyecto ">
            <div className="Proyecto__Titulo">
                <h2>
                    {props.titulo}
                </h2>
            </div>
            <div className="Proyecto__Imagenes">
                <img src={`assets/${props.imagen1}.png`} style={{width: "250px"}} id="Imagen1"/>
                <img src={`assets/${props.imagen2}.png`} style={{width: "100px"}}/>
            </div>
            <div className="Proyecto__Descripcion">
                <p>
                    {props.descripcion}
                </p>
            </div>
            <div className="Proyecto__Link">
                <a href={props.link}>Ir a la pagina</a>
            </div>
            
        </div>
    )
}