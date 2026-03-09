
import { useNavigate, useLocation } from 'react-router'

/*custom hook reutilizable (logica y no repite codigo, separa responsabilidades custom hook en logica y estado y la app solo la ui)*/
export function useRouter() {
    const navigate = useNavigate()
    const location = useLocation()

    
    function navigateTo(path) {
       navigate(path)
    }

    return {
        currentPath:location.path,
        navigateTo
    }
}