import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faLaptop } from "@fortawesome/free-solid-svg-icons";
import {Media} from './Media'




export function Footer (){


    return (
        <footer>
            <div id="Footer__Informacion__container">
                <div id="FooterContactoTitulo">
                    <h3>Contacto</h3>
                </div>
                <div id="Footer__Contacto" data-aos="fade-down">
                    <div className="Contactos">
                        <FontAwesomeIcon icon={faWhatsapp} /><span>+54 2664163699</span>
                    </div>
                    <div className="Contactos">
                        <FontAwesomeIcon icon={faEnvelope} id="EmailContacto"/><span>matias.dvlp@gmail.com</span>
                    </div>
                    <div className="Contactos">
                        <FontAwesomeIcon icon={faLaptop} id="LaptopContacto"/><a href="https://www.freelancer.com.ar/u/MatiasLatorre" target={"_blank"}id="FreeLanceContacto">Freelance</a>
                    </div> 
                </div>
            </div>
            <div id="Footer__Media">
                <div id="FooterMediaTitulo">
                    <h3>Media</h3>
                </div>              
                <Media fontsize={"40px"} id="IconosMedia"></Media>
            </div>
            <div id="Footer__HechoPor">
                <span>Página Creada con React por Matias Latorre</span>
            </div>
        </footer>
    );
}