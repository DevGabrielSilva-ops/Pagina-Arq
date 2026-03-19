import { Link } from 'react-router-dom'

// ASSETS
import BrazilLogo from '../../assets/Brasil.svg'
import EuaLogo from '../../assets/Eua.svg'
import facebookIcon from '../../assets/Facebook.svg'
import instagramIcon from '../../assets/Instagram.svg'
import LinkeDinIcon  from '../../assets/LinkeDin.svg'
import TwitterIcon from '../../assets/Twitter.svg' 
import Logo from '../../assets/Dnc.svg'

//Styles
import "./footer.css"


function Footer() {
    return (
        <footer>
            <div className="container" >
                <div className="d-flex jc-space-between">
                    <div className="footer-logo-col">
                        <Link> <img src={Logo}/></Link>
                       
                        <p className="gray-1-color">A escola que prepara você para as <br />
                            profissões em alta no mercado de <br />
                            trabalho.
                        </p>
                             
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

                    <div className="d-flex fd-column al-center Pages">
                        <h1>Pages</h1>
                    
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                        </ul>
                    </div>


                    <div className="d-flex fd-column al-start gray-1-color Pages">
                        <h1>Contact</h1>

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
                
                <div className="d-flex al-center fd-row">
                    
                        <p>Copyright © DNC - 2024</p>
                        
                        <div className="inf d-flex al-center">
                            <a href=""> <img src= {BrazilLogo}/></a>
                            <a href=""> <img src= {EuaLogo}/></a>
                        </div>
                    
                </div>
            </div>
        </footer>
    )
}

export default Footer