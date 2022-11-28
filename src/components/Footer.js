import React from 'react';
import logo from '../assets/img/logo-DH.png';
function Footer(){
  
    return(
        <div className="container">
     
        <footer  class="pie">
            <nav id="logo">
                <a href="#"><img src={logo} alt="Logo Digital House"/></a>
            </nav>
            <nav id="opciones">
                <ul>
                    <li><a href="#">facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                </ul>
            </nav>
        </footer>
    </div>
    )
}
export default Footer;