
import Footer from './components/footer.jsx'
import { Header } from './components/header.jsx'
import { HomePage } from './pages/Home.jsx'
import { SearchPage } from './pages/Search.jsx'
import { NotFoundPage } from './pages/404.jsx'
import { Routes, Route } from 'react-router' 
import { Job } from './pages/Job.jsx'

function App() {

    return (
        <>
            <Header />
            <Routes>
            <Route path="/" element={<HomePage></HomePage>}/>
            <Route path="/search" element={<SearchPage></SearchPage>}/>
            <Route path="/empleo" element={<Job></Job>}/>
            <Route path="*" element={<NotFoundPage></NotFoundPage>}/>
            </Routes>
            <Footer />

        </>
    )
}

export default App
