import HTML from './HTML.png'
import CSS from './CSS.png'
import JavaScript from './JavaScript.png'
import ReactIMG from './react.png'

export function HabilidadesMain() {

    return (
        <div id="Habilidades__Container">
            <div className="Habilidad" id="HTML_container">
                <img src={HTML} alt="" />
            </div>
            <div className="Habilidad" id="CSS_container">
                <img src={CSS} alt="" />
            </div>
            <div className="Habilidad" id="JavaScript__container">
                <img src={JavaScript} alt="" />
                <h2 className="NombreHabilidad">JavaScript</h2>
            </div>
            <div className="Habilidad" id="react__container">
                <img src={ReactIMG} alt="" />
                <h2 className="NombreHabilidad">React  JS</h2>
            </div>
        </div>
    )


}