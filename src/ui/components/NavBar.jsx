import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    const navigate = useNavigate();

    return (
        
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-4 blockquote">
            
            <div className='tituloNav'>
                <img src="..\public\Hero.svg" alt="" className='imagenTitulo'/>
                <Link 
                    className="navbar-brand" 
                    to="/FrontPage"
                >
                    HEROES APP
                </Link>
            </div>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active': ''}`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active': ''}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active': ''}`}
                        to="/anime"
                    >
                        Anime
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}