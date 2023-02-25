import AOS from 'aos'
import 'aos/dist/aos.css';
import {AnimacionAOS} from './AnimacionAOS';

export function SeccionesMain (props) {
    return <>
        <section>
            <AnimacionAOS>
                <div className="neomorphismo" id={`${props.id}`}>
                    <h2 className="Titulos__Main">{props.titulo}</h2>
                    <p className="Descripciones__Main">
                        {props.descripcion}
                    </p>
                    {props.children}
                </div>
            </AnimacionAOS>
            

        </section>
    </>
}