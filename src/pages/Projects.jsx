import Header from "../components/Header/header" 
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/footer'
import Project from '../components/Projects/Projects'
import '../main.css'

function Projects() {
    return ( 
        <>
            <Header />
            <Banner title= "Projects"image="Projects.jpg"/>
            <Project />
            <Footer />

        </>
    )
}

export default Projects