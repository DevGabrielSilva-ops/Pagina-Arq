import Header from "../components/Header/header" 
import Footer from '../components/Footer/footer'
import Banner from '../components/Banner/Banner'
import AboutText from '../components/AboutText/AboutText'
import { useContext } from 'react'

import { AppContext } from '../contexts/AppContext'
import '../main.css'
function About() {
    const appContext = useContext(AppContext)
    return (
        <>
         <Header />
         <Banner title= {appContext.Languages?.[appContext.Language]?.menu?.about}  image="About.jpg"/>
         <AboutText/>
         <Footer/>
        </>
)
}

export default About