import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import styles from '../styles/detail.module.css'
import { Link } from '../components/Link'
import snarkdown from 'snarkdown'

 function JobSection ({ title, content }) {
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


export const JobDetail = () => {
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
    <div className={styles.container}>
      <nav className={styles.breadcrumb}>
        <Link href="/search" className={styles.breadcrumbLink}>
          Empleos
        </Link>
        <span className={styles.breadcrumbSeparator}>/</span>
        <span className={styles.breadcrumbTitle}>{job.title}</span>
      </nav>

      <header className={styles.header}>
        <h1 className={styles.title}>{job.title}</h1>
        <div className={styles.meta}>
          <p className={styles.company}>{job.company}</p>
          <p className={styles.location}>{job.location}</p>
        </div>
        <button className={styles.applyButton}>Aplicar a esta oferta</button>
      </header>

      <JobSection title="Descripción del puesto" content={job.content.description} />

      <JobSection title="Responsabilidades" content={job.content.responsibilities} />

      <JobSection title="Requisitos" content={job.content.requirements} />

      <JobSection title="Acerca de la empresa" content={job.content.about} />
    </div>
  )
}