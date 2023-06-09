import Card from "./Card"
import logements from "../api/logements.json"
import './styles/AppartList.css'
import { NavLink } from "react-router-dom"

function AppartList(){
    return(      
            <div className = 'appartment-list'> 
                {/* Récupération de la liste de logement avec images et titres grâce à la méthode map */}
                {logements.map(({id, title, cover})=>(
                    <Card
                        key = {id}
                        id = {id}
                        title={title}
                        cover={cover} 
                    />
                ))}

            </div>
    )
}

export default AppartList