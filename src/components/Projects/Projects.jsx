import '../Projects/Projects.css'
import LikedFilled from '../../assets/Like-Filled.svg'
import Like from '../../assets/Like.svg'
import { useState } from 'react'
function Project(props){
     
    //Likes
    const [isLike,setisLike] = useState([false,false,false,false,false,false,false,false])
     const ConfirmaLike = (clickado) => {
        const novoLike = [...isLike]   // copia o array
        novoLike[clickado] = !novoLike[clickado] // inverte só o clicado
        setisLike(novoLike) // atualiza o estado
     }
    return (
       
        <div className="Project container d-flex fd-column" {...props}>
                <div className="Title-Project">
                    <h2>Follow Our Projects</h2>  
                    <p>It is a long established fact that a reader will be distracted by the of readable <br />
                        content of page  lookings at its layouts  points.</p>  
                </div>

                <div className="Project-Layout">
                    <div className="Project-Interno">
                        <img className="Project-img" src="Levi.jpg"  />
                        <h1>Levi Cohen </h1>
                        <p>New York, USA</p>
                        <img onClick={() => ConfirmaLike(0)} src={isLike[0] ? LikedFilled :  Like} />
                      
                        </div>

                    <div className="Project-Interno">
                        <img className="Project-img" src="Julia.jpg"  />
                        <h1>Julia Souza</h1>
                        <p>São Paulo, Brasil</p>
                        <img onClick={() => ConfirmaLike(1)} src={isLike[1] ? LikedFilled : Like} />
                    </div>

                    <div className="Project-Interno">
                        <img className="Project-img" src="joao.png"  />
                        <h1>João Silva </h1>
                        <p>Belo Horizonte, Brasil</p>
                        <img onClick={() => ConfirmaLike(2)} src={isLike[2] ? LikedFilled : Like } />
                    </div>

                    <div className="Project-Interno">
                        <img className="Project-img" src="Nora.jpg"  />
                        <h1>Nora Owen </h1>
                        <p>Melbourne, Australia</p>
                        <img onClick={() => ConfirmaLike(3)} src={isLike[3] ? LikedFilled : Like} />
                    </div>

                    <div className="Project-Interno">
                        <img className="Project-img" src="Sofia.jpg"  />
                        <h1>Sofia Carter </h1>
                        <p>Los Angeles, USA</p>
                        <img onClick={() => ConfirmaLike(4)} src={isLike[4] ? LikedFilled :  Like} />
                    </div>

                    <div className="Project-Interno">
                        <img className="Project-img" src="Pedro.jpg"  />
                        <h1>Pedro Alves </h1>
                        <p>São Paulo, Brasil</p>
                        <img onClick={() => ConfirmaLike(5)} src={isLike[5] ? LikedFilled : Like} />
                    </div>

                    <div className="Project-Interno">
                        <img className="Project-img" src="Luana.jpg"  />
                        <h1>Luana Rodriguez </h1>
                        <p>Rio de Janeiro, Brasil</p>
                        <img onClick={() => ConfirmaLike(6)} src={isLike[6] ? LikedFilled : Like} />
                    </div>

                    <div className="Project-Interno">
                        <img className="Project-img" src="Gianna.jpg"  />
                        <h1> Gianna	Mateo </h1>
                        <p>New York, USA</p>
                        <img onClick={() => ConfirmaLike(7)} src={isLike[7] ? LikedFilled: Like} />
                    </div>
                </div>

        </div>

    )
}

export default Project