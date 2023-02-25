


export function CertificadoMain (props) {


    return (
                <div className="neomorphismo certificado" data-aos="fade-right">
                    <div className="Tecnologias__Certificado" >

                        {/* Condicionales para poner los logos de las tecnologias de cadad certificado  */}
                        {
                            props.tecnologia1 == undefined ? <></> : <img src={`assets/${props.tecnologia1}.png`} style={{width: "31px"}} title={`${props.tecnologia1}`}></img>
                        }
                        {
                            props.tecnologia2 == undefined ? <></> : <img src={`assets/${props.tecnologia2}.png`} style={{width: "22px"}} title={`${props.tecnologia2}`}></img>
                        }
                        {
                            props.tecnologia3 == undefined ? <></> : <img src={`assets/${props.tecnologia3}.png`} style={{width: "28px"}} title={`${props.tecnologia3}`}></img>
                        }

                        
                    </div>
                    <img src={`assets/${props.img}`} alt={`${props.img}`} style={{borderRadius: '10px', width:'100%'}} loading={"lazy"}/>
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
