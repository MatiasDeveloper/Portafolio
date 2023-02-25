import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

export function Media(props) {



    return <>
        <div className="Media" id={props.id}>
            <a href="https://github.com/MatiasDeveloper" style={{fontSize : props.fontsize}}><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/MatiasLatorre" style={{fontSize : props.fontsize}} id="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div> 
    </>
}