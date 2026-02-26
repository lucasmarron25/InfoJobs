
import { JobCard } from './JobCard.jsx'
import styles from '../styles/EstiloEmpleos.module.css'

export function JobListing({ jobs }) {

    return <>

        <section className={styles.sectionJobs}>
            

            <div className={styles.jobListings}>

                {jobs.length === 0 && (
                    <p>No se han encontrado resultados...</p>
                )}

                {jobs.map(job => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>
        </section>
    </>

}


{/*function JobListingCard({ data, titulo, empresa, ubicacion, descripcion }) {

    const [aplicado, setAplicado] = React.useState(false);
    const botonAplicado = aplicado ? 'btn-activo' : '';

    function handleClick() {
        setAplicado(true);
    }
        return <>
        <article className="resultados" 
            data-modalidad={data?.modalidad}
            data-nivel={data?.nivel}
            data-technology={data?.technology}
        >
            <div>
                <h3>{titulo}</h3>
                <small className="nombre-puesto-trabajo">{empresa} | {ubicacion}</small>
                <p> {descripcion}</p>
            </div>

            <div className="div-btn">
                <button className={`btn btn-aplicar ${botonAplicado}`} onClick={handleClick} disabled={aplicado}>
                    {aplicado ? 'Aplicado' : 'Aplicar'}
                </button>
            </div>
        </article>
    </>
 */}

