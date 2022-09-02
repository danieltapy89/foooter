import './App.css';


//COMENTARIO
//COPIAR ESTOS 2 LINKS EN index.html DEBAJO DEL <title>React App</title>, CARPETA PUBLIC 
//<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
//<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
//    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>

//COPIAR ESTO EN index.css EN LA CARPETA src
// #bg{
//   background-color: rgb(124, 173, 156);
// }

// #in{
//   color: rgba(234, 13, 234, 0.657);
//   font-size: 40px;
// }

// #fb{
//   color: #150D9F;
//   font-size: 40px;
// }

// #tw{
//   color: deepskyblue;
//   font-size: 40px;
// }

// #wa{
//   color: green;
//   font-size: 40px;
// }
function home() {
  return (
    <div id='bg' className="row w-100 p-3 m-0 text-white">
      <div className="col-lg12 col-md-6 col-lg-3">
        <p className="h3">Zapatillas</p>
        
      </div>
      <div className="col-lg12 col-md-6 col-lg-3">
        <p className="h5 mb-3">Sport Accessories</p>
        <a name="destinos"></a>
        <div className="mb-2"><a className="text-white text-decoration-none" href="">Quienes Somos</a></div>
        <div className="mb-2"><a className="text-white text-decoration-none" href="">Sucursales</a></div>
        <div className="mb-2"><a className="text-white text-decoration-none" href="">Terminos y Condiciones</a></div>
        <div className="mb-2"><a className="text-white text-decoration-none" href="">Politicas de Privacidad</a></div>
        
      </div>
      <div className="col-lg12 col-md-6 col-lg-3">
        <p className="h5 mb-3">¿Necesitas Ayuda?</p>
        <a name="aerolineas"></a>
        <div className="mb-2"><a className="text-white text-decoration-none" href="">Preguntas Frecuentes</a></div>
        <div className="mb-2"><a className="text-white text-decoration-none" href="">Formas de Envio</a></div>
        <div className="mb-2"><a className="text-white text-decoration-none" href="">Cambios</a></div>
        <div className="mb-2"><a className="text-white text-decoration-none" href="">Botón de Arrepentimiento</a></div>
        <div clasNames="mb-2"><a className="text-white text-decoration-none" href="">Ventas Corporativas</a></div>
      </div>
      <div className="col-lg12 col-md-6 col-lg-3">
        <p className=" d-flex h5 mb-3">Contacto</p>
        <a name="contacto"></a>
        <div className='d-flex justify-content-between'>
        <div className="mb-2"><a id='in'><i className="bi bi-instagram"></i></a></div>
        <div className="mb-2"><a id='fb'><i className="bi bi-facebook"></i></a></div>
        <div className="mb-2"><a id='tw'><i className="bi bi-twitter"></i></a></div>
        <div className="mb-2"><a id='wa'><i className="bi bi-whatsapp"></i></a></div>
        </div>
      </div>
    </div>
  );
}

export default home;
