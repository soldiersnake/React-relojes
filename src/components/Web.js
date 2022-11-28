import React from 'react';
import Encabezado from './Encabezado'
import Banner from './Banner';
import Productos from './Productos';
import Footer from './Footer';
function Web(){
  return (
    <div className="container">
     {/* <h1>Bienvenido a nuestro primer proyecto en React</h1> */}
     <Encabezado/>
     <Banner/>  
     <Productos/>
     <Footer/>
    </div>

  )

}
export default Web;