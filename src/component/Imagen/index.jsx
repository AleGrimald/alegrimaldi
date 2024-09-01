import './Imagen.css';
const Imagen = (props)=>{
    const {imagen, alter, clase, id}=props
    return <img id={id} className={clase} src={imagen} alt={alter}/>
}
export default Imagen;