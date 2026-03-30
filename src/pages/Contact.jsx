import Header from "../components/Header/header" 
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/footer'
import ContactForm from '../components/ContactForm/ContactForm'
import { useContext } from 'react'

import { AppContext } from '../contexts/AppContext'

function Contact() {
    const appContext = useContext(AppContext)
    return (
        <>
         <Header />
         <Banner title= {appContext.Languages?.[appContext.Language]?.menu?.contact} image="Contact.jpg"/>
         <ContactForm />
         <Footer />
        </>
    )
}

export default Contact