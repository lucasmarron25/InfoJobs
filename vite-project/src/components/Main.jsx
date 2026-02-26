import '../styles/estiloMain.css'
import '../styles/EstiloEmpleos.module.css'
import {useFilters} from '../pages/Search'

export function Main() {

const {total,currentPage} = useFilters()

const title= `Resultados: ${total} Página:${currentPage} - DevJobs`

    return <>
        <main className='mainBuscar'>
            <title>{title}</title>
            <h2 className="encuentra-trabajo">Encuentra tu próximo trabajo </h2>
            <p className="encuentra-trabajo-descripcion texto-centrado">Explora miles de oportunidades en el sector tecnológico
            </p>
        </main>
    </>
}