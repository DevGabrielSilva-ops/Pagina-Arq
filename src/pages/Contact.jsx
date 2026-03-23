import Header from "../components/Header/header" 
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/footer'
import ContactForm from '../components/ContactForm/ContactForm'

function Contact() {
    return (
        <>
         <Header />
         <Banner title= "Contact"image="Contact.jpg"/>
         <ContactForm />
         <Footer />
        </>
    )
}

export default Contact