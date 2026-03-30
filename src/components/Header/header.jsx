import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
// ASSETS
import Logo from '../../assets/Dnc.svg'


import { AppContext } from '../../contexts/AppContext'

//Styles
import "./header.css"


function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const abreMenu = () => {
        setIsOpen(!isOpen)
    }

    const appContext = useContext(AppContext)

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
                            <li><Link to="/">{appContext.Languages?.[appContext.Language]?.menu?.home}</Link></li>
                            <li><Link to="/about">{appContext.Languages?.[appContext.Language]?.menu?.about}</Link></li>
                            <li><Link to="/contact">{appContext.Languages?.[appContext.Language]?.menu?.projects}</Link></li>
                            <li><Link to="/projects">{appContext.Languages?.[appContext.Language]?.menu?.contact}</Link></li>

                        </ul>
                    </nav>
                </div>

             
            </div>
        </header>
    )
}

export default Header