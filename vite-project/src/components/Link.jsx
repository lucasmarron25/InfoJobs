import { useRouter } from '../hooks/useRouter.jsx'


export function Link({ href, children, ...restOfProps }) {

    const { navigateTo, currentPath} = useRouter()

    const styleActive = (currentPath===href) ? 'isActive' : ''

    const handleClick = (event) => {
        event.preventDefault()
        navigateTo(href)
    }

    return (
        <a className={`nav-a ${styleActive} `} href={href} {...restOfProps} onClick={handleClick}>
            {children}
        </a>
    )

}