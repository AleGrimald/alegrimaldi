import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Sobremi from './component/Sobremi';
import Skill from './component/Skill';
import Formacion from './component/Formacion';
import Proyecto from './component/Proyecto';
import Contacto from './component/Contacto';
import { useState } from 'react';

function App() {
  //Estado de cada Seccion de la pagina
  const [btnSobre, setBtnSobre] = useState(false);
  const [btnSkill, setBtnSkill] = useState(false);
  const [btnFormacion, setBtnFormacion] = useState(false);
  const [btnProyecto, setBtnProyecto] = useState(false);
  const [btnContacto, setBtnContacto] = useState(false);
  const [btnInicio, setBtnInicio] = useState(true);
  

  //Eventos Click para los botones del header
  const controlSobremi = ()=>{
    setBtnSobre(!btnSobre);
    setBtnSkill(false);
    setBtnFormacion(false);
    setBtnProyecto(false);
    setBtnContacto(false);
    btnSobre?setBtnInicio(!btnInicio):setBtnInicio(false);
  }
  const controlSkill = ()=>{
    setBtnSobre(false);
    setBtnSkill(!btnSkill);
    setBtnFormacion(false);
    setBtnProyecto(false);
    setBtnContacto(false);
    btnSkill?setBtnInicio(!btnInicio):setBtnInicio(false);
  }
  const controlFormacion = ()=>{
    setBtnSobre(false);
    setBtnSkill(false);
    setBtnFormacion(!btnFormacion);
    setBtnProyecto(false);
    setBtnContacto(false);
    btnFormacion?setBtnInicio(!btnInicio):setBtnInicio(false);
  }
  const controlProyecto = ()=>{
    setBtnSobre(false);
    setBtnSkill(false);
    setBtnFormacion(false);
    setBtnProyecto(!btnProyecto);
    setBtnContacto(false);
    btnProyecto?setBtnInicio(!btnInicio):setBtnInicio(false);
  }
  const controlContacto = ()=>{
    setBtnSobre(false);
    setBtnSkill(false);
    setBtnFormacion(false);
    setBtnProyecto(false);
    setBtnContacto(!btnContacto);
    btnContacto?setBtnInicio(!btnInicio):setBtnInicio(false);
  }
  const controlInicio = ()=>{
    setBtnSobre(false);
    setBtnSkill(false);
    setBtnFormacion(false);
    setBtnProyecto(false);
    setBtnContacto(false);
    setBtnInicio(true);
  }


  //Texto, Link, Estilos, Imagenes de los componenetes de cada seccion de la pagina
  const datosHeader ={ 
    img:'estrellas.png',
    alter:"estrellas decorativas",
    parrafo:'Grimaldi Oscar Alejandro',
    clase:'link_menu',
    arrLi:['Inicio','Sobre mi','Skills','Formacion','Proyectos','Contacto'],
    click:[controlInicio, controlSobremi, controlSkill, controlFormacion, controlProyecto, controlContacto]
  }
  const datosMain ={
    clases:{
      clase_link:'main_redes',
      clase_foto:'main_img',
      clase_flecha:'main_flecha',
    },
    arrLi:['Github','Linkedin','Curriculum'],
    aref:['https://github.com/AleGrimald','https://www.linkedin.com/in/alejandro-grimaldi-828868262/','https://www.linkedin.com/in/alejandro-grimaldi-828868262/overlay/1724945923350/single-media-viewer/?profileId=ACoAAECOIKABWok06Yx4FflAjBXLyRSPPhv_43s'],
    imagenes:{
      foto:{
        icono:'Mifoto.jpeg',
        alter:"foto de perfil",
      },
      flecha:{
        icono:'flecha.svg',
        alter:'decoracion para los links'
      }
    },
    estilosFlecha:[
      {
        fondo:'linear-gradient(60deg,rgba(5, 5, 5, 0.7) 50%, rgb(255, 255, 255))',
        color:'#ffffff',
        brillo:'0px 0px 5px 1px white'
      },
      {
        fondo:'linear-gradient(60deg,#0e76a8 45%, rgb(235, 235, 255))',
        color:'#ffffff',
        brillo:'0px 0px 5px 1px rgb(123, 255, 248)'
      },
      {
        fondo:'linear-gradient(60deg,rgb(106, 14, 168, 0.4) 55%, rgb(255, 255, 255))',
        color:'#ffffff',
        brillo:'0px 0px 5px 1px rgb(188, 163, 255)'
      }
    ]
  }
  const datosSobremi ={
    p1:'Hola, mi nombre es Alejandro y soy Desarrollor Web Forntend',
    p2:'Soy graduado en Desarrollo Web Forntend (HTML5, CSS3, JS y REACT) del proyecto Oracle ONE con Alura Latam.',
    p3:'Ademas comence a cursar la Tecnicatura de Desarrolo de Software en el IES Tafi Viejo - Tucuman, en donde adquiri conocimientos en lenguajes como C#, C, Java, SQL (SMS y MySQL Workbench), entre otras habilidades blandas que me forman como un mejor programador. Tambien sume a mi formacion curso de FreeCodeCamp (Boostrap, JQuery, SASS y Redux,) y Microsoft Learn (C# .NET)',
    h2_texto:'Sobre mi',
    clase_contenedor:'contenedor_sobremi',
    clase_titulo:'sobre_titulo',
    clase_p1:'sobre_p1',
    clase_p2:'sobre_p2',
    clase_p3:'sobre_p3'
  }
  const datosSkill=[
    {
      titulo: 'HTML5',
      img:'./html.png',
      skill_img:'skill_img',
      skill_titulo: 'skill_titulo'
    },
    {
      titulo: 'CSS3',
      img:'./css.png',
      skill_img:'skill_img',
      skill_titulo: 'skill_titulo'    },
    {
      titulo: 'Javascript',
      img:'./js.png',
      skill_img:'skill_img',
      skill_titulo: 'skill_titulo'    },
    {
      titulo: 'React',
      img:'./react.png',
      skill_img:'skill_img',
      skill_titulo: 'skill_titulo'    },
    {
      titulo: 'Node JS',
      img:'./nodejs.png',
      skill_img:'skill_img',
      skill_titulo: 'skill_titulo'    },
    {
      titulo: 'Express JS',
      img:'./express.png',
      skill_img:'skill_img',
      skill_titulo: 'skill_titulo'    },
    {
      titulo: 'Java',
      img:'./java.png',
      skill_img:'skill_img',
      skill_titulo: 'skill_titulo'    },
    {
      titulo: 'C++',
      img:'./c.png',
      skill_img:'skill_img',
      skill_titulo: 'skill_titulo'    },
    {
      titulo: 'C#',
      img:'./csharp.png',
      skill_img:'skill_img',
      skill_titulo: 'skill_titulo'    }    
  ]
  const datosFormacion= [
    { 
      img:'./aluralogo.png',
      titulo:'Programa Oracle Next Education - Front-end',
      texto:'2023 - ONE & Alura',
      link:'https://app.aluracursos.com/program/certificate/3f94b331-85cf-44c7-adb9-0f7e9ecb0396',
      clase:'formacion_tarjeta',
      nombre:'Certificado'
    },
    { 
      img:'./freecodecamplogo.svg',
      titulo:'Front End Development Libraries',
      texto:' 2024 - FreeCodeCamp',
      link:'https://freecodecamp.org/espanol/certification/AleGrimaldi/front-end-development-libraries',
      clase:'formacion_tarjeta',
      nombre:'Certificado'
    },
    { 
      img:'./aluralogo.png',
      titulo:'Formación SQL con MySQL',
      texto:'2023 - ONE & Alura',
      link:'https://app.aluracursos.com/degree/certificate/be62438e-71ec-492b-a880-67d24db656db',
      clase:'formacion_tarjeta',
      nombre:'Certificado'
    },
    { 
      img:'./freecodecamplogo.svg',
      titulo:'Backend Web - Node.js y Express',
      texto:'2024 - FreeCodeCamp',
      link:'s/Certificacion',
      clase:'formacion_tarjeta',
      nombre:'Certificado'
    },
    { 
      img:'./iestafiviejo.png',
      titulo:'Tecnicatura en Desarrollo de Software - JAVA',
      texto:'2023 - IES Tafi Viejo ext Yerba Buena',
      link:'s/Certificacion',
      clase:'formacion_tarjeta',
      nombre:'Certificado'
    },
    { 
      img:'./iestafiviejo.png',
      titulo:'Tecnicatura en Desarrollo de Software - C++',
      texto:'2023 - IES Tafi Viejo ext Yerba Buena',
      link:'s/Certificacion',
      clase:'formacion_tarjeta',
      nombre:'Certificado'
    },
  ]
  const datosProyecto= [
    {
      img:'./barberia.png',
      texto:['Barberia Alura','Desarrollado en el curso Alura Latam','Tecnologias Implementadas:'],
      alter:'Imagen de la pagina',
      arrLi:['HTML5','CSS3','Diseño Responsivo'],
      flecha:'./flecha.svg',
      arrLink:[
        {
          txtLink:'Ver Demo',
          link:'https://alegrimald.github.io/La-Barberia/',
          claseLink:'proyecto_link'
        },
        {
          txtLink:'Ver Repositorio',
          link:'https://github.com/AleGrimald/La-Barberia',
          claseLink:'proyecto_link'
        },
      ],
      clase:'proyecto_img'
    },
    {
      img:'./encriptador.png',
      texto:['Encriptador de Texto','Desarrollado en el curso Alura Latam','Tecnologias Implementadas'],
      alter:'Imagen de la pagina',
      arrLi:['HTML5','CSS3','Diseño Responsivo','JS'],
      flecha:'./flecha.svg',
      arrLink:[
        {
          txtLink:'Ver Demo',
          link:'https://alegrimald.github.io/Encriptador-Ale/'
        },
        {
          txtLink:'Ver Repositorio',
          link:'https://github.com/AleGrimald/Encriptador-Ale'
        },
      ],
      clase:'proyecto_img'
    },
    {
      img:'./recetas.png',
      texto:['Recetas de Cocina','Desarrollado en el curso Alura Latam','Tecnologias Implementadas'],
      alter:'Imagen de la pagina',
      arrLi:['HTML5','CSS3','Diseño Responsivo'],
      flecha:'./flecha.svg',
      arrLink:[
        {
          txtLink:'Ver Demo',
          link:'https://alegrimald.github.io/Recetas-Cocina-Ale/'
        },
        {
          txtLink:'Ver Repositorio',
          link:'https://github.com/AleGrimald/Recetas-Cocina-Ale'
        },
      ],
      clase:'proyecto_img'
    },
    {
      img:'./alurageek.png',
      texto:['AluraGeek','Desarrollado en el curso Alura Latam','Tecnologias Implementadas'],
      alter:'Imagen de la pagina',
      arrLi:['HTML5','CSS3','Diseño Responsivo'],
      flecha:'./flecha.svg',
      arrLink:[
        {
          txtLink:'Ver Demo',
          link:'https://alegrimald.github.io/AleGeek/'
        },
        {
          txtLink:'Ver Repositorio',
          link:'https://github.com/AleGrimald/AleGeek'
        },
      ],
      clase:'proyecto_img'
    },
    {
      img:'./ale6.png',
      texto:['Ale6','Proyecto Personal Simula el Juego Quini6','Tecnologias Implementadas'],
      alter:'Imagen de la pagina',
      arrLi:['React','Diseño Responsivo'],
      flecha:'./flecha.svg',
      arrLink:[
        {
          txtLink:'Ver Demo',
          link:'https://aleg6.netlify.app/'
        },
        {
          txtLink:'Ver Repositorio',
          link:'https://github.com/AleGrimald/Ale6'
        },
      ],
      clase:'proyecto_img'
    },
    {
      img:'./semanaies.png',
      texto:['Semana IES','Exposicion Sobre Delitos Informaticos, IES YB','Tecnologias Implementadas'],
      alter:'Imagen de la pagina',
      arrLi:['React','Diseño Responsivo'],
      flecha:'./flecha.svg',
      arrLink:[
        {
          txtLink:'Ver Demo',
          link:'https://semana-ies-tv.netlify.app/'
        },
        {
          txtLink:'Ver Repositorio',
          link:'https://github.com/AleGrimald/Semana-IES-2023'
        },
      ],
      clase:'proyecto_img'
    },
    {
      img:'./aleflix.png',
      texto:['Alura Flix','Desarrollado en el curso Alura Latam','Tecnologias Implementadas'],
      alter:'Imagen de la pagina',
      arrLi:['React','Diseño Responsivo'],
      flecha:'./flecha.svg',
      arrLink:[
        {
          txtLink:'Ver Demo',
          link:'https://aleflix.netlify.app/'
        },
        {
          txtLink:'Ver Repositorio',
          link:'https://github.com/AleGrimald/AluraFlix'
        },
      ],
      clase:'proyecto_img'
    },
  ]
  const datosContacto={
    texto:[
      {
        txtTexto:'¿Quieres contactarme?',
        txtClass:'contacto_p1'
      },
      {
        txtTexto:'Complete el siguiente formulario y me pondré en contacto con usted lo antes posible.',
        txtClass:'contacto_p2'
      }
    ],
    camposInp:[
      {
        lblText:'Nombre',
        inpType:'text',
        inpId:'inp_nombre',
      },
      {
        lblText:'E-mail',
        inpType:'email',
        inpId:'inp_mail',
      },
      {
        lblText:'Asunto',
        inpType:'text',
        inpId:'inp_asunto',
      }
    ],
    campoTxtArea:{
      idTxtArea:'mensaje',
      lblTextArea: 'Mensaje'
    },
    botones:[
      {
        inpType:'submit',
        inpId:'inp_submit',
        inpValor:'Enviar Mensaje'
      },
      {
        inpType:'reset',
        inpId:'inp_reset',
        inpValor:'Limpiar Campos'
      },
    ]
  }
  
  return (
    <div className="App" style={{backgroundImage:'url(./posibleFondo.png)'}}>
      <Header datosHeader={datosHeader}/>

      {
        btnInicio?<Main datosMain={datosMain}/>:<></>
      }
      
      {
        btnSobre?<Sobremi datosSobremi={datosSobremi}/>:<></>
      }

      {
        btnSkill?<Skill datosSkill={datosSkill}/>:<></>
      }

      {
        btnFormacion?<Formacion datosFormacion={datosFormacion}/>:<></>
      }

      {
        btnProyecto?<Proyecto datosProyecto={datosProyecto}/>:<></>
      }

      {
        btnContacto?<Contacto datosContacto={datosContacto}/>:<></>
      }
    </div>
  );
}

export default App;
