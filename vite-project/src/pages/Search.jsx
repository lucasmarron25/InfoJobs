import { useEffect, useState } from 'react'


import { Main } from '../components/Main.jsx'
import { Pagination } from '../components/Pagination.jsx'
import { JobListing } from '../components/JobListing.jsx'
import { Search } from '../components/Search.jsx'
import { useRouter } from '../hooks/useRouter.jsx'



export function useFilters() {


    const { navigateTo } = useRouter()
    const RESULTS_PER_PAGE = 5

    const [textToFilter, setTextToFilter] = useState(() => {
        const params = new URLSearchParams(window.location.pathname)
        return params.get('text')
    })
    const [currentPage, setCurrentPage] = useState(() => {
        const params = new URLSearchParams(window.location.pathname)
        const page = params.get('page')
        return page ? Number(page) : 1
    })
    const [filters, setFilters] = useState(() => {
        const params = new URLSearchParams(window.location.pathname)
        return {
            technology: params.get('technology') || '',
            location: params.get('location') || '',
            experience: params.get('experience') || ''
        }
    })


    const [jobs, setJobs] = useState([])
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        async function fetchJobs() {
            try {

                const params = new URLSearchParams()

                if (textToFilter) params.append('text', textToFilter)
                if (filters.technology) params.append('technology', filters.technology)
                if (filters.location) params.append('type', filters.location)
                if (filters.experience) params.append('level', filters.experience)

                const offset = (currentPage - 1) * RESULTS_PER_PAGE
                params.append('limit', RESULTS_PER_PAGE)
                params.append('offset', offset)


                const queryParams = params.toString()

                setLoading(true)
                const response = await fetch(`https://jscamp-api.vercel.app/api/jobs?${queryParams}`)
                const json = await response.json()
                setJobs(json.data)
                setTotal(json.total)



            } catch (error) {
                console.log('error fetch: error')
            } finally {
                setLoading(false)
            }
        }
        fetchJobs()
    }, [filters, textToFilter, currentPage])


    useEffect(() => {

        const params = new URLSearchParams()
        if (textToFilter) params.append('text', textToFilter)
        if (filters.technology) params.append('technology', filters.technology)
        if (filters.location) params.append('location', filters.location)
        if (filters.experience) params.append('experience', filters.experience)

        if (currentPage > 1) params.append('page', currentPage)

        const newUrl = params.toString() ? `${window.location.pathname}?${params.toString()}` : window.location.pathname
        navigateTo(newUrl)

    }, [filters, textToFilter, currentPage, navigateTo])

    const totalPages = Math.ceil(total / RESULTS_PER_PAGE)


    function handlePageChange(page) {
        console.log('cambiando pagina', page)
        setCurrentPage(page)
    }
    function handleSearch(filters) {
        setFilters(filters)
        setCurrentPage(1)
    }
    function handleTextFilter(newTextToFilter) {
        setTextToFilter(newTextToFilter)
        setCurrentPage(1)
    }

    return { total, loading, handlePageChange, handleSearch, handleTextFilter, jobs, currentPage, totalPages,textToFilter }

}
export function SearchPage() {

    const { totalPages, handlePageChange, handleSearch, handleTextFilter, jobs, currentPage, loading,textToFilter } = useFilters()


    return (
        <>
            <Main />
            <Search initialText={textToFilter} onSearch={handleSearch} onTextFilter={handleTextFilter} />
            <h2 style={{ marginLeft: "400px" }} >Resultados de busqueda</h2>
            {loading ? <p style={{ textAlign: 'center' }}>cargando empleos...</p> : <JobListing jobs={jobs} />}
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />

        </>
    )
}

