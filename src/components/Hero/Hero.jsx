import { Link } from 'react-router-dom'
import '../Hero/Hero.css'
import Button from '../Button/Button'
import { useContext } from 'react'

import { AppContext } from '../../contexts/AppContext'

function Hero() {
    const appContext = useContext(AppContext)
    return (
        <div className="hero d-flex al-center jc-center ">
            <div className="hero-text">
                <h1>{appContext.Languages?.[appContext.Language]?.hero?.title}</h1>
                <p>{appContext.Languages?.[appContext.Language]?.hero?.subtitle}</p>
                <Link to="/about">
                    <Button buttonStyle= "secundary">
                       {appContext.Languages?.[appContext.Language]?.hero?.cta}
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Hero