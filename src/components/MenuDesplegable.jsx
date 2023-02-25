import {Media} from './Media'



export function MenuDesplegable (props) {
    return (
        <>
            <div className={props.clase}>
                {props.children}
            </div>
        </>
    )
}