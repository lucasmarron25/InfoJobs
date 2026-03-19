import { useState } from "react";
import styles from '../styles/EstiloEmpleos.module.css'
import { Link } from "./Link";
import { useFavoritesStore } from "../../store/favoritesStore.jsx";
import { authStore } from '../../store/authStore.jsx'

function JobCardFavoriteButton({ jobId }) {

    const { toggleFavorite, isFavorite } = useFavoritesStore()
    const { isLoggedIn } = authStore()

    return (<button className={`btn `} style={{ background: "none" }} onClick={() => toggleFavorite(jobId)} disabled={!isLoggedIn}>
        {isFavorite(jobId) ?
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-heart"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" /></svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-heart"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>}
    </button>)
}
function JobCardApplyButton({ jobId }) {
    const [aplicado, setAplicado] = useState(false);
    const botonAplicado = aplicado ? 'btn-activo' : '';
    const { isLoggedIn } = authStore()

     function handleClick() {
        setAplicado(true);
    }

    return (<button className={`btn btn-aplicar ${botonAplicado}`} onClick={handleClick} style={{ margin: "5px 0px" }} disabled={aplicado || !isLoggedIn}>
                        {aplicado ? 'Aplicado' : 'Aplicar'}
                    </button>)
}

export function JobCard({ job }) {

    return <>
        <article className={styles.resultados}
            data-modalidad={job?.modalidad}
            data-nivel={job?.nivel}
            data-technology={job?.technology}
        >
            <div className={styles.info}>
                <Link href={`/jobs/${job.id}`}>{job.titulo}</Link>
                <small className={styles.nombrePuestoTrabajo}>{job.empresa} | {job.ubicacion}</small>
                <p> {job.descripcion}</p>
            </div>

            <div className={styles.divBtn}>
                <div>
                    <JobCardApplyButton jobId={job.id}></JobCardApplyButton>
                    <JobCardFavoriteButton jobId={job.id}></JobCardFavoriteButton>
                </div>
                <Link href={`/jobs/${job.id}`} style={{ textDecoration: "underline" }}>ver detalles</Link>

            </div>
        </article>
    </>
}