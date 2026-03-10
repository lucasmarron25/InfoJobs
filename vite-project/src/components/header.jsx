import '../styles/estiloHeader.css'
import { Link } from './Link'

export function Header(){
return <> <header className="header">
        <div className="header-izquierda">
            <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" color="#09f" height="30px" width="30px"
                strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            <Link href="/" className="logo-nombre">DevJobs</Link>
        </div>

        <nav className="nav">
            <Link href="/search" className="nav-a" >Buscar</Link>
            <Link href="/empleo" className="nav-a">Empleos</Link>
            <Link href="" className="nav-a">Empresas</Link>
            <Link href="" className="nav-a">Salarios</Link>
        </nav>

        <div className="container-sesion-derecha">
            <a href="" className="sesion-derecha-a empleo cv">Subir cv</a>
        </div>

    </header>
     <hr />
     </>
}


