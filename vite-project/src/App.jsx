
import Footer from './components/footer.jsx'
import { Header } from './components/header.jsx'
import { HomePage } from './pages/Home.jsx'
import { SearchPage } from './pages/Search.jsx'
import { NotFoundPage } from './pages/404.jsx'
import { Routes, Route } from 'react-router'
import { JobDetail } from './pages/Detail.jsx'
import Profile from './pages/ProfilePage.jsx'
import { ProtectedRoute } from './components/ProtectedRoute.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

function App() {


    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage></HomePage>} />
                <Route path="/search" element={<SearchPage></SearchPage>} />
                <Route path="/jobs/:jobId" element={<JobDetail></JobDetail>} />
                <Route path="/profile" element={<ProtectedRoute redirectTo="/login"> <Profile/> </ProtectedRoute>} />
                <Route path="*" element={<NotFoundPage></NotFoundPage>} />
                <Route path="/login" element={<Login></Login>} />
                <Route path="/register" element={<Register></Register>} />
            </Routes>
            <Footer />

        </>
    )
}

export default App
