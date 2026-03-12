import { NavLink } from 'react-router'
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
            <NavLink to="/search" className={({isActive})=>isActive ? "isActive ":"navHover"} >Buscar</NavLink>
            <NavLink to="/empleo" className={({isActive})=>isActive ? "isActive":"navHover"}>Empleos</NavLink>
            <NavLink to="/asd" className={({isActive})=>isActive ? "isActive":"navHover"}>Empresas</NavLink>
            <NavLink to="" className={({isActive})=>isActive ? "isActive":"navHover"}>Salarios</NavLink>
        </nav>

        <div className="container-sesion-derecha">
            <a href="" className="sesion-derecha-a empleo cv">Subir cv</a>
        </div>

    </header>
     <hr />
     </>
}


