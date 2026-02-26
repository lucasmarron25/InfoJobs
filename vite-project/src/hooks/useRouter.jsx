
import { useEffect, useState } from "react"

/*custom hook reutilizable (logica y no repite codigo, separa responsabilidades custom hook en logica y estado y la app solo la ui)*/
export function useRouter() {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect(() => {

        const handleLocationChange = () => {
            setCurrentPath(window.location.pathname)
        }

        window.addEventListener('popstate', handleLocationChange)

        return () => {
            window.removeEventListener('popstate', handleLocationChange)
        }

    }, [])

    function navigateTo(path) {
        window.history.pushState({}, "", path)
        window.dispatchEvent(new PopStateEvent('popstate'))
    }

    return {
        currentPath,
        navigateTo
    }
}