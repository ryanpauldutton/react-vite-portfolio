import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export default function Navbar() {

    return <nav className="nav">
        <Link to="/" className="logo">Ryan Dutton</Link>
        <ul>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/projects">Projects</CustomLink>
            <CustomLink to="/contact">Contact</CustomLink>
        </ul>
    </nav>
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end:true})
    return (
        <li className={isActive ? 'active' : ''}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}
//USED YOUTUBE TUTORIAL TO HELP WITH NAV (https://www.youtube.com/watch?v=SLfhMt5OUPI&t=628s)