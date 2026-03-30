import '../AboutText/AboutText.css'
import { useContext } from 'react'

import { AppContext } from '../../contexts/AppContext'
function AboutText () {
    const appContext = useContext(AppContext)
    return (
         <div className=" container Inf-dir">
          <h2>{appContext.Languages?.[appContext.Language]?.about?.title}</h2>
            <div>
                <p className="primary-color">
                   {appContext.Languages?.[appContext.Language]?.about?.p1}
                </p>

                <p>
                     {appContext.Languages?.[appContext.Language]?.about?.p2}
                </p>
                <p>
                     {appContext.Languages?.[appContext.Language]?.about?.p3}
                </p>
            </div>
        </div>
    )
}

export default AboutText