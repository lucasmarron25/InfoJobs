

import styles from '../styles/Pagination.module.css'

export function Pagination({ currentPage = 1, totalPages = 10, onPageChange }) {

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

    const isFirstPage = currentPage === 1
    const isLastPage = currentPage === totalPages

    const stylePrevButton = isFirstPage ? { pointerEvents: 'none', opacity: 0.5 } : {}
    const styleLastButton = isLastPage ? { pointerEvents: 'none', opacity: 0.5 } : {}


    const HandlePrevClick = (event) => {
        event.preventDefault()
        if (!isFirstPage) {
            onPageChange(currentPage - 1)
        }

    }

    const HandleNextClick = (event) => {
        event.preventDefault()
        if (!isLastPage) {
            onPageChange(currentPage + 1)
        }

    }

    const HandleChangePage = (event, page) => {
        event.preventDefault()
        if (page !== currentPage) {
            onPageChange(page)
        }

    }

    
const buildPage= (page)=>{
const url = new URL(window.location)
url.searchParams.set('page',page)
return `${url.pathname}?${url.searchParams.toString()}`
}


    return <>
        <section className={styles.pagination}>
            <a href={buildPage(currentPage - 1)} style={stylePrevButton} onClick={HandlePrevClick}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 6l-6 6l6 6" /></svg></a>
            {pages.map((page) => (
                <a key={page} className={currentPage === page ? styles.isActive : ''} href={buildPage(page)} onClick={(event) => HandleChangePage(event, page)}>
                    {page}
                </a>
            ))}

            <a href={buildPage(currentPage + 1)} style={styleLastButton} onClick={HandleNextClick}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg></a>
        </section>
        <hr />
    </>

}
