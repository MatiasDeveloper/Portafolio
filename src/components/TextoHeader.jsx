import {Media} from './Media'

export function TextoHeader (props) {
    return <>
        <div id="TextoHeader">
            <div id="SeccionHeader">
                <h1>{props.pagina =="Home" ? "Front End Developer" : "Proyectos" }</h1>
            </div>
            <div id="NombreHeader">
                <h2 className={props.pagina =="Projects" ? "NombreOscuro" : ""}>Matias Latorre</h2><Media fontsize="40px" className=""></Media>
            </div>
        </div>
    </>
}