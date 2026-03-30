import { createContext,  useState, useEffect} from "react";
import { getApiData } from "../services/apiServices";

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const[Language,setLanguage] = useState('br')
    const [Languages,setLanguages] = useState()
    const [Loading,setLoading] = useState(true)

    useEffect (() => {
        const FetchLanguages = async () => {
            try{
                const getTexts = await getApiData('webText')
                setLanguages(getTexts)
            } catch {
                console.error(e)
            }
            finally {
                setLoading(false)
            }
        }
        FetchLanguages()
    }, [])

    return (
        <AppContext.Provider value={{Language,Languages,setLanguage, Loading}}>
            {children}
        </AppContext.Provider>
    )
}