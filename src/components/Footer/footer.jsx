import { Link } from 'react-router-dom'

// ASSETS
import BrazilLogo from '../../assets/Brasil.svg'
import EuaLogo from '../../assets/Eua.svg'
import facebookIcon from '../../assets/Facebook.svg'
import instagramIcon from '../../assets/Instagram.svg'
import LinkeDinIcon  from '../../assets/LinkeDin.svg'
import TwitterIcon from '../../assets/Twitter.svg' 
import Logo from '../../assets/Dnc.svg'


import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'

//Styles
import "./footer.css"


function Footer() {
    const appContext = useContext(AppContext)

    const changeLanguage = (country) => {
        appContext.setLanguage(country)
    }
    return (
        <footer>
            <div className="container" >
                <div className="d-flex mobile-fd-column jc-space-between">
                    <div className="footer-logo-col">
                        <Link> <img src={Logo}/></Link>
                       
                        <p className="gray-1-color">{appContext.Languages?.[appContext.Language]?.general?.footerLogoText}</p>
                             
                            <div className="d-flex social-links">
                                <a href="https://google.com.br" target="_blank">
                                    <img src={facebookIcon}/>
                                </a>

                                 <a href="https://google.com.br" target="_blank">
                                    <img src={TwitterIcon}/>
                                </a>

                                 <a href="https://google.com.br" target="_blank">
                                    <img src={LinkeDinIcon}/>
                                </a>

                                  <a href="https://google.com.br" target="_blank">
                                    <img src={instagramIcon}/>
                                </a>

                            </div>
                    </div>

                    <div className="d-flex fd-column gray-1-color Pages">
                        <h1>{appContext.Languages?.[appContext.Language]?.general?.pages}</h1>
                    
                        <ul>
                            <li><Link to="/">{appContext.Languages?.[appContext.Language]?.menu?.home}</Link></li>
                            <li><Link to="/about">{appContext.Languages?.[appContext.Language]?.menu?.about}</Link></li>
                            <li><Link to="/contact">{appContext.Languages?.[appContext.Language]?.menu?.projects}</Link></li>
                            <li><Link to="/projects">{appContext.Languages?.[appContext.Language]?.menu?.contact}</Link></li>
                        </ul>
                    </div>


                    <div className="d-flex fd-column al-start gray-1-color Pages">
                        <h1>{appContext.Languages?.[appContext.Language]?.general?.contact}</h1>

                        <p>
                            R. Justino Cobra, 61 – Vila <br/>
                            Ema | São José dos <br />
                            Campos – SP | CEP <br />
                            12243-030 
                        </p>

                        <p>suporte@escoladnc.com.br </p>

                        <p>(19) 99187-4342</p>
                    </div>
                </div>
                <hr className="gray-1-color" />
                
                <div className="d-flex al-center jc-space-between fd-row">
                    
                        <p>Copyright © DNC - 2024</p>
                        
                        <div className="d-flex inf">
                         <img onClick={() => changeLanguage('br')} src= {BrazilLogo}/> 
                           <img onClick={() => changeLanguage('en')} src= {EuaLogo}/>
                        </div>
                    
                </div>
            </div>
        </footer>
    )
}

export default Footer