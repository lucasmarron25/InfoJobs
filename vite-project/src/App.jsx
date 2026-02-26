
import Footer from './components/footer.jsx'
import { Header } from './components/header.jsx'
import { HomePage } from './pages/Home.jsx'
import { SearchPage } from './pages/Search.jsx'
import { Route } from './components/Route.jsx'
import { Job } from './pages/Job.jsx'

function App() {

    return (
        <>
            <Header />
            <Route path="/" component={HomePage}/>
            <Route path="/search" component={SearchPage}/>
            <Route path="/empleo" component={Job}/>
            <Footer />

        </>
    )
}

export default App
