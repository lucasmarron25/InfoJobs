import { Link as NavLink } from 'react-router'


export function Link({ href, children, ...restOfProps }) {

    return (
        <NavLink className={`nav-a`} to={href} {...restOfProps} >
            {children}
        </NavLink>
    )

}