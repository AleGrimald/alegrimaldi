import Imagen from '../Imagen';
import Parrafo from '../Parrafo';
import './Skill.css';

const Skill=(props)=>{
    const {datosSkill} = props;    

    return <div className='skill'>
        {
            datosSkill.map(element =>
            <div 
                className='skill_container'
                
            >
                <div className='container_img'>
                    <Parrafo clase={element.skill_titulo} texto={element.titulo}/>
                    <Imagen clase={element.skill_img} imagen={element.img}/>
                </div>
            </div>)
        }
    </div>
}
export default Skill;