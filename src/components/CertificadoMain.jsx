import HTML from './HTML.png'
import CSS from './CSS.png'
import JavaScript from './JavaScript.png'
import AP1 from './AP1.png'
import AP2 from './AP2.png'
import Google1 from './Google 1.png'
import Google2 from './Google 2.png'
import CertificadoUXUI from './Certificado UX UI.png'


export function CertificadoMain (props) {
    return (
                <div className="neomorphismo certificado" data-aos="fade-right">
                    <div className="Tecnologias__Certificado" >

                        {/* Condicionales para poner los logos de las tecnologias de cadad certificado  */}
                        {
                            props.tecnologia1 == undefined ? <></> : <img src={HTML} style={{width: "31px"}} title={`${props.tecnologia1}`}></img>
                        }
                        {
                            props.tecnologia2 == undefined ? <></> : <img src={CSS} style={{width: "22px"}} title={`${props.tecnologia2}`}></img>
                        }
                        {
                            props.tecnologia3 == undefined ? <></> : <img src={JavaScript} style={{width: "28px"}} title={`${props.tecnologia3}`}></img>
                        }

                        
                    </div>
                    {
                        props.img == "AP1" ? <img src={AP1} alt={`${props.img}`} style={{borderRadius: '10px', width:'100%'}} loading={"lazy"}/> : 
                        props.img == "AP2" ? <img src={AP2} alt={`${props.img}`} style={{borderRadius: '10px', width:'100%'}} loading={"lazy"}/> : 
                        props.img == "Google1" ? <img src={Google1} alt={`${props.img}`} style={{borderRadius: '10px', width:'100%'}} loading={"lazy"}/> :
                        props.img == "Google2" ? <img src={Google2} alt={`${props.img}`} style={{borderRadius: '10px', width:'100%'}} loading={"lazy"}/> : 
                        props.img == "CertificadoUXUI" ? <img src={CertificadoUXUI} alt={`${props.img}`} style={{borderRadius: '10px', width:'100%'}} loading={"lazy"}/> : <></>
                    }
   
                    

                    <p style={{maxWidth: "100%", fontSize:"1rem"}}>Este es un certificado que indica que cumpli a la perfeccion el examen y curso de {props.nivel}.</p>
                    <br />
                        {props.empresa == "Google" ? <p className="DescripcionGoogle__Certificado">
                            <a href="https://learndigital.withgoogle.com/activate/validate-certificate-code">
                            Verificar Certificado 
                        </a> : {props.codigo} </p>  
                        :   ""}
                    <br />
                    <hr />
                    <br />
                    <h2 className="Titulos__Main" style={{fontSize:"1rem"}}>
                         Otorgado por: {props.empresa}
                    </h2>

                    

                </div>
  
    )
}
