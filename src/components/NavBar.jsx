import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse, faBriefcase, faBars} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { MenuDesplegable } from './MenuDesplegable';


export function NavBar (props) {


    function NavBarBotones () {
        return (
        <>
            <li className={props.activo == "Home" ? "SeccionNavbarActivo" : "SeccionNavbar"}>
                
                <Link to={props.activo == "Home" ? "" : "../"} ><FontAwesomeIcon icon={faHouse}  fontSize="1.0625rem"/>Principal</Link>
            </li>
            <li className={props.activo == "Projects" ? "SeccionNavbarActivo" : "SeccionNavbar"}>
                <Link to={props.activo == "Projects" ? "" : "Projects"} ><FontAwesomeIcon icon={faBriefcase} fontSize="1.0625rem"/>Proyectos</Link>
            </li>
        </>
        ) 
    }


        const [menu_class, setMenuClass] = useState("MenuDesplegado desactivado")
        const [isMenuClicked, setIsMenuClicked] = useState(false)
        const updateMenu = () => {
            if(!isMenuClicked) {
                setMenuClass("MenuDesplegable")
            } else {
                setMenuClass("MenuDesplegable desactivado")
            }
            setIsMenuClicked(!isMenuClicked)
        }

    return (
        <>
        <div id="NavBar__Container">
            <nav id="NavBar">
                <ul>
                    <NavBarBotones></NavBarBotones>
                    <FontAwesomeIcon icon={faBars} id="MenuDesplegable" onClick={updateMenu}/>
                </ul>
            </nav>
        </div>
        <MenuDesplegable clase={menu_class}>
            <FontAwesomeIcon icon={faBars} id="MenuDesplegable" onClick={updateMenu}/>
            <li className={props.activo == "Home" ? "SeccionNavbarActivo" : "SeccionNavbar"}>
                
                <Link to={props.activo == "Home" ? "" : "../"} ><FontAwesomeIcon icon={faHouse}  fontSize="1.0625rem"/>Principal</Link>
            </li>
            <li className={props.activo == "Projects" ? "SeccionNavbarActivo" : "SeccionNavbar"}>
                <Link to={props.activo == "Projects" ? "" : "Projects"} ><FontAwesomeIcon icon={faBriefcase} fontSize="1.0625rem"/>Proyectos</Link>
            </li>
        </MenuDesplegable>
        </>
        
    )   
    

}
