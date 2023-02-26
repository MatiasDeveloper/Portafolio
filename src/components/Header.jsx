
import {NavBar} from './../components/NavBar'
import {TextoHeader} from './TextoHeader'
import Inicio from './Inicio.jpg'
import Proyectos from './Proyectos.jpg'


export function Header (props) {

    function WaveDeArriba () {
        return <>
        <svg className={props.pagina == "Home" ? "desactivado" : ""} id="wave"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fillOpacity="1" d="M0,128L60,133.3C120,139,240,149,360,138.7C480,128,600,96,720,69.3C840,43,960,21,1080,21.3C1200,21,1320,43,1380,53.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        </>
    }

    function WaveDeAbajo () {
        return <>
            <svg id="wave__down"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#dde1e7" fillOpacity="1" d="M0,128L80,144C160,160,320,192,480,181.3C640,171,800,117,960,117.3C1120,117,1280,171,1360,197.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        </>
    }



    return (
        <>
        <NavBar activo={props.pagina}/>
        <WaveDeArriba />
        <header className={props.pagina == "Home" ? "" : "ProyectosIMG"} id="header">
            <TextoHeader pagina={props.pagina}/>
            <div id="IMGCONTAINER">
                <img src={
                    props.pagina == "Home" ? Inicio
                : Proyectos}  style= { props.pagina == "Projects" ?{animation: 'none'} : {}}
                alt="" id="HeaderIMG"/>
            </div>
            <WaveDeAbajo />
        </header>
        </>
    );
}