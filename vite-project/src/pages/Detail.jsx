import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import { Link } from '../components/Link'
import styles from '../styles/detail.module.css'
import snarkdown from 'snarkdown'
import { authStore } from '../../store/authStore.jsx'
import { useFavoritesStore } from "../../store/favoritesStore.jsx";

function DetailFavoriteButton({ jobId }) {

    const { toggleFavorite, isFavorite } = useFavoritesStore()
    const { isLoggedIn } = authStore()

    return (<button className={`btn `} style={{ background: "none" }} onClick={() => toggleFavorite(jobId)} disabled={!isLoggedIn}>
        {isFavorite(jobId) ?
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-heart"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" /></svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-heart"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>}
    </button>)
}

function JobSection({ title, content }) {
  const html = snarkdown(content)

  return (

    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={`${styles.sectionContent} ${styles.prose}`}>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </section>

  )
}

export function ButtonApplyJob(){
  const {isLoggedIn} = authStore()

   return <button disabled={!isLoggedIn} className={styles.applyButton}>
            {isLoggedIn ? "Aplicar a esta oferta" : "iniciar sesion"}
          </button>
}

export function JobDetail() {



  const { jobId } = useParams()
  const navigate = useNavigate()

  const [job, setJob] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`https://jscamp-api.vercel.app/api/jobs/${jobId}`)
      .then(response => {
        if (!response.ok) {
          navigate('/not-found')
        }

        return response.json()
      })
      .then(json => {
        setJob(json)
      })
      .catch(err => {
        setError(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [jobId])

  if (loading) {
    return (
      <div className={styles.loading}>
        <p>Cargando oferta...</p>
      </div>
    )
  }

  if (error || !job) {
    return (
      <div className={styles.notFound}>
        <h1>Oferta no encontrada</h1>
        <p>Puede que esta oferta haya caducado o que la URL no sea correcta.</p>
        <button className="btn" onClick={() => navigate('/search')}>
          Volver a la lista de empleos
        </button>
      </div>
    )
  }

  return (
    <div>
      <nav className={styles.breadcrumb}>
        <Link href="/search" className={styles.breadcrumbLink}>
          Empleos
        </Link>
        <span className={styles.breadcrumbSeparator}>/</span>
        <span className={styles.breadcrumbTitle}>{job.titulo}</span>
      </nav>
      
      <div className={styles.container}>

        <header className={styles.header}>
          <div className={styles.containerTitulo}>
            <h1 className={styles.title}>{job.titulo}</h1>
            <div className={styles.meta}>
              <p className={styles.company}>{job.empresa} - </p>
              <p className={styles.location}>- {job.ubicacion}</p>
            </div>
          </div>

          <ButtonApplyJob></ButtonApplyJob>
          <DetailFavoriteButton jobId={job.id}></DetailFavoriteButton>
          
        </header>

        <JobSection title="Descripción del puesto" content={job.content.description} />

        <JobSection title="Responsabilidades" content={job.content.responsibilities} />

        <JobSection title="Requisitos" content={job.content.requirements} />

        <JobSection title="Acerca de la empresa" content={job.content.about} />
      </div>
    </div>
  )
}
