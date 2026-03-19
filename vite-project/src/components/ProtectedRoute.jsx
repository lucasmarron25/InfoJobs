import { Navigate } from "react-router";
import { authStore } from "../../store/authStore";

export function ProtectedRoute({children, redirectTo = '/login'}){
    const {isLoggedIn}= authStore()

    if(!isLoggedIn){
        return <Navigate to={redirectTo} replace />
    }
    return children
}