import Imagen from '../Imagen';
import Parrafo from '../Parrafo';
import './Sobremi.css';

const Sobremi = (props)=>{
    const {clase_contenedor, h2_texto,p1,p2,p3,clase_titulo,clase_p1,clase_p2,clase_p3}= props.datosSobremi;
    return <div className={clase_contenedor}>
        <div className='sobremi_contenedor_texto'>
            <Parrafo clase={clase_titulo} texto={h2_texto}/>
            <Parrafo clase={clase_p1} texto={p1}/>
            <Parrafo clase={clase_p2} texto={p2}/>
            <Parrafo clase={clase_p3} texto={p3}/>
        </div>
    </div>
}
export default Sobremi;