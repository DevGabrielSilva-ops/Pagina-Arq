import Header from "../components/Header/header" 
import Footer from '../components/Footer/footer'
import Banner from '../components/Banner/Banner'
import AboutText from '../components/AboutText/AboutText'
import '../main.css'
function About() {
    return (
        <>
         <Header />
         <Banner title= "About us"image="About.jpg"/>
         <AboutText/>
         <Footer/>
        </>
)
}

export default About