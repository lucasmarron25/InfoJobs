import { NavLink } from 'react-router'
import '../styles/estiloHeader.css'
import { Link } from './Link'
import { authStore } from '../../store/authStore.jsx'
import { useFavoritesStore } from '../../store/favoritesStore.jsx'

const HeaderUserButton = () => {
  const { isLoggedIn, login, logout } = authStore()
  const { clearFavorites } = useFavoritesStore()

  const handleLogout = () => {
    logout()
    clearFavorites()
  }

  return isLoggedIn
    ? <button onClick={handleLogout}>Cerrar sesión</button>
    : <button onClick={login}>Iniciar sesión</button>
}

export function Header() {
      const { isLoggedIn, login, logout } = authStore()
        const { numberOfFavorites } = useFavoritesStore()
    return <>
        <header className="header">
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
                <NavLink to="/search" className={({ isActive }) => isActive ? "isActive " : "navHover"} >Buscar</NavLink>
                <NavLink to="/empleo" className={({ isActive }) => isActive ? "isActive" : "navHover"}>Empleos</NavLink>
                {isLoggedIn && (
                     <NavLink to="/profile" className={({ isActive }) => isActive ? "isActive" : "navHover"}>Profile: {numberOfFavorites}</NavLink>
             ) }
               
            </nav>

            <div className="container-sesion-derecha">
                <a href="" className="sesion-derecha-a empleo cv">Subir cv</a>
                <HeaderUserButton></HeaderUserButton>

            </div>

        </header>
        <hr />
    </>
}


