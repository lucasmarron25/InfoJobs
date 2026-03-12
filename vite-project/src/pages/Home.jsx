import '../styles/estilosHome.css'
import { useRouter } from '../hooks/useRouter.jsx'


export function HomePage() {

   const { navigateTo } = useRouter()

    const handleSearch = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const searchTerm = formData.get('search')
        
        const url = searchTerm ? `/search?text=${encodeURIComponent(searchTerm)}` : `/search`
        navigateTo(url)
    }



    return (
        <main className='mainHomePage' >
            <div className="container-contenido-principal">
                <h1 className="contenido-principal-titulo">Encuentra el trabajo de tus sueños</h1>
                <p className="contenido-principal-parrafo texto-centrado">Unete a la comunidad mas grande de desarrolladores web
                    y encuentra tu proxima <br /> oportunidad.</p>
                <form role='search' onSubmit={handleSearch} className="search">
                    <input name="search" className="input"  placeholder="Buscar empleos por titulo, habilidad o empresa"/>
                    <button type="submit" className='btn'>Buscar</button>
                </form>
            </div>

            <section className="seccion-info">
                <h3 className="info-titulo">¿Por qué DevJobs?</h3>
                <p className="contenido-info texto-centrado">DevJobs es la principal bolsa de trabajo para desarrolladores.
                    Conectamos a <br />los desarrolladores con las mejores empresas del mundo.</p>
                <div className="info-container">
                    <div className="container-contenido">
                        <img src="/img/home_repair_service_30dp_147DD9_FILL0_wght400_GRAD0_opsz24 (1).png" alt=""
                            className="contenido-img" />
                        <h4>Encuentra el trabajo de tus sueños</h4>
                        <p className="contenido-info texto-centrado">Busca miles de empleos de las mejores empresas de <br />todo el
                            mundo</p>
                    </div>
                    <div className="container-contenido">
                        <img src="/img/supervisor_account_30dp_147DD9_FILL0_wght400_GRAD0_opsz24.png" alt=""
                            className="contenido-img" />
                        <h4>Conecta con las mejores empresas</h4>
                        <p className="contenido-info texto-centrado">Conecta con empresas que estan contrando por tus
                            <br />habilidades
                        </p>
                    </div>
                    <div className="container-contenido">
                        <img src="/img/real_estate_agent_30dp_147DD9_FILL0_wght400_GRAD0_opsz24.png" alt=""
                            className="contenido-img" />
                        <h4>Obtené el salario que mereces</h4>
                        <p className="contenido-info texto-centrado">Obten el salario que mereces con nuestra calculadora de
                            salarios</p>
                    </div>
                </div>
            </section>
        </main>

    )
}