import Clima1 from './Clima1.png'
import Clima2 from './Clima2.png'
import Calculadora1 from './Calculadora1.png'
import Calculadora2 from './Calculadora2.png'


export function Project (props) {
    return (
        <div className="neomorphismo Proyecto ">
            <div className="Proyecto__Titulo">
                <h2>
                    {props.titulo}
                </h2>
            </div>
            <div className="Proyecto__Imagenes">
                <img src={
                    props.imagen1 == "Calculadora1" ? Calculadora1 : 
                    props.imagen1 == "Clima1" ? Clima1 : <></>
                } style={{width: "250px"}} id="Imagen1"/>
                <img src={
                    props.imagen2 == "Calculadora2" ? Calculadora2 : 
                    props.imagen2 == "Clima2" ? Clima2 : <></>
                } style={{width: "100px"}}/>
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