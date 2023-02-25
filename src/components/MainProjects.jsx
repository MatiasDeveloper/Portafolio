import { Project } from "./Project";



export function MainProjects () {
    return (
        <main className="MainProyectos">
            <Project titulo="Pagina Calculadora" imagen1="Calculadora1" imagen2="Calculadora2" descripcion="Esta es una web de una calculadora creada 100% por mi usando HTML, CSS y JavaScript" link="https://calculadora-wine.vercel.app/"/>
            <Project titulo="Pagina de Clima" imagen1="Clima1" imagen2="Clima2" descripcion="Una pagina que muestra el tiempo o clima de la ciudad ingresada. Utiliza los datos de una API externa" link="https://clima-sable.vercel.app/"/>
        </main>
    )
}