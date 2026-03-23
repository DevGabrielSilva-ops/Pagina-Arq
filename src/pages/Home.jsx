import Header from "../components/Header/header" 
import Footer from '../components/Footer/footer'
import Projects from '../components/Projects/Projects'
import Hero from '../components/Hero/Hero'

function Home() {
    return (
        <>  
            <Header />
            <div className="container">
                <Hero/>
                
            </div>
            <Projects />
            <Footer />
        </>
)
}

export default Home