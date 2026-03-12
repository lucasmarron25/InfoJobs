import { useState } from "react";
import styles from '../styles/EstiloEmpleos.module.css'
import { Link } from "./Link";

export function JobCard({ job }) {

    const [aplicado, setAplicado] = useState(false);
    const botonAplicado = aplicado ? 'btn-activo' : '';

    function handleClick() {
        setAplicado(true);
    }
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
                <button className={`btn btn-aplicar ${botonAplicado}`} onClick={handleClick} disabled={aplicado}>
                    {aplicado ? 'Aplicado' : 'Aplicar'}
                </button>
                <Link href={`/jobs/${job.id}`} style={{ textDecoration: "underline"}}>ver detalles</Link>
            </div>
        </article>
    </>
}