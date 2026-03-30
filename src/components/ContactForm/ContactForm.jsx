import '../ContactForm/ContactForm.css'
import Button from '../Button/Button'
import {useState, useEffect} from 'react'
import { useContext } from 'react'

import { AppContext } from '../../contexts/AppContext'

function ContactForm() {
    
    const [formData,setFormData] = useState( {
        name: '',
        email: '',
        mensagem: ''
    })
    
    const [isFormValid,setIsFormValid] = useState(false)
    const [formSubmitLoading,setFormSubmitLoading] = useState(false)
    const [formSubmitted,setFormSubmitted] = useState(false)


     const handleSubmit = async (e) => {
        e.preventDefault()
        if(isFormValid){
           setFormSubmitLoading(true)
           try{
              const response = await fetch("https://api.web3forms.com/submit", {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },

                body: JSON.stringify({...formData, access_key: "b2006fda-5b14-428c-82aa-4e8cf9993f0a"})
              })

              if(response.ok){
                setFormSubmitted(true)
              } else {
                alert('Erro ao enviar!!')
              }
           } catch (e) {
                alert('Erro: ', e)
           } finally {
                setFormSubmitLoading(false)
           }
        } 
     }

     useEffect(() => {
        const isValidEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            return emailRegex.test(email)
        }  

        const isValid = formData.name.trim() && 
        formData.email.trim() && 
        isValidEmail(formData.email) && 
        formData.mensagem.trim()

        setIsFormValid(isValid)
     }, [formData])

     const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
     }

     const appContext = useContext(AppContext)
    return(
       
        <div className="container">
            <div className="contact-form d-flex fd-column al-center">
                <h2>{appContext.Languages?.[appContext.Language]?.contact?.title}</h2>
                <form onSubmit={handleSubmit}>
                        <div className="d-flex form-group">
                            <input 
                                className="form-input" 
                                type="text" 
                                id="name" 
                                name="name"
                                placeholder="Name *"
                                onChange={handleChange}
                            />
                              <input 
                                className="form-input" 
                                type="email" 
                                id="email" 
                                name="email"
                                placeholder="Email *"
                               onChange={handleChange}
                                />

                        </div>

                        <div className="d-flex form-group">

                                 <textarea 
                                className="form-input"
                                name="mensagem" 
                                id="mensagem"
                                placeholder="Mensagem *"
                                rows= "4"
                                onChange={handleChange}
                                >
                                </textarea>
                                

                        </div>

                         <div className="d-flex al-center jc-end form-group">

                            <div>
                                <Button type="submit" buttonStyle="primary" disabled={!isFormValid || formSubmitLoading} >
                                    Enviar
                                </Button>
                            </div>
                                

                        </div>


                </form>
            
            </div>
            
                
            
        </div>
    )
}

export default ContactForm