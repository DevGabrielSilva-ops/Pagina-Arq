import { Link } from 'react-router-dom'

// ASSETS
import Logo from '../../assets/Dnc.svg'

//Styles
import "./header.css"


function Header() {
    return (
        <header>
            <div className="container" >
                <div className="d-flex al-center jc-space-between">
                    <Link to="/"> <img src={Logo} /> </Link>

                    <nav>
                        <ul className='d-flex'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/projects">Projects</Link></li>

                        </ul>
                    </nav>
                </div>

             
            </div>
        </header>
    )
}

export default Header