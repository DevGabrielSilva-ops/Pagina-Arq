import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
// ASSETS
import Logo from '../../assets/Dnc.svg'

//Styles
import "./header.css"


function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const abreMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <header>
            <div className="container" >
                <div className="d-flex al-center jc-space-between">
                    <Link to="/"> <img src={Logo} /> </Link>
                    <div className="mobile-menu">
                        <Button buttonStyle="secundary" onClick={() => setIsOpen(abreMenu)}>
                            Menu
                        </Button>
                    </div>

                   <nav className={`${isOpen ? 'open' : ''}`}>
                        <Button buttonStyle="secundary" className="mobile-menu close-btn"  onClick={() => setIsOpen(abreMenu)}>
                            X
                        </Button>
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