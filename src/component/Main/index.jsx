import './Main.css';
import Ul from '../Ul';
import Imagen from '../Imagen';

const Main=(props)=>{
    const {clases, arrLi, imagenes, estilosFlecha, aref} = props.datosMain;
    const {clase_link, clase_foto, clase_flecha} = clases;
    const {foto, flecha} = imagenes;


    return <main className='main'>
        <div className='main_foto'>
            <Imagen clase={clase_foto} imagen={foto.icono} alter={foto.alter}/>
        </div>
        <div className='contenedor_texto'>
            <div className='main_texto'>
                
                <p>Inicio</p>
                <p>Sobre mi</p>
                <p>Skills</p>
                <p>Formacion</p>
                <div>
                    <img src="./programacion.png" alt="" style={{width:'60px'}}/>
                    <p>Proyectos</p>
                </div>
                
                <p>Contacto</p>
            </div>
            <Ul clase={clase_link} claseFlecha={clase_flecha} datos={arrLi} imagen={flecha.icono} estilos={estilosFlecha} link={aref}/>
        </div>
        

    </main>
}
export default Main;