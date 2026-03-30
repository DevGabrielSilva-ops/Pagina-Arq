import Header from "../components/Header/header" 
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/footer'
import Project from '../components/Projects/Projects'
import '../main.css'

import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"

function Projects() {
    const appContext = useContext(AppContext)
    return ( 
        <>
            <Header />
            <Banner title= {appContext.Languages?.[appContext.Language]?.menu?.projects} image="Projects.jpg"/>
            <Project />
            <Footer />

        </>
    )
}

export default Projects