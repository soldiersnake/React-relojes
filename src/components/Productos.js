import React from 'react';
import logo1 from '../assets/img/reloj1.jpg';
import logo2 from '../assets/img/reloj2.jpg';
import logo3 from '../assets/img/reloj3.jpg';
import logo4 from '../assets/img/reloj4.jpg';

function Productos(){
    return(

        <div className="container">
            <main class="productos"> 
            <p>Holaaa</p>
                <h2 id="productos">Nuestros productos</h2>
                <article>
                <img src={logo1} alt="Reloj"/>
                <h2>Lorem, ipsum.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni mollitia blanditiis natus dicta error, cum alias ipsam libero odio impedit, fuga at dolore voluptatem illum pariatur cupiditate fugit, ullam amet?</p>
                    <h2>Precio: $450</h2>
                    <button>Ver más</button>
                </article>
                <article>
                    <img src={logo2} alt="Reloj"/>
                <h2>Lorem, ipsum.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni mollitia blanditiis natus dicta error, cum alias ipsam libero odio impedit, fuga at dolore voluptatem illum pariatur cupiditate fugit, ullam amet?</p>
                    <h2>Precio: $650</h2>
                    <button>Ver más</button>
                </article>
                <article>
                    <img src={logo3} alt="Reloj"/>
                <h2>Lorem, ipsum.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni mollitia blanditiis natus dicta error, cum alias ipsam libero odio impedit, fuga at dolore voluptatem illum pariatur cupiditate fugit, ullam amet?</p>
                    <h2>Precio: $945</h2>
                    <button>Ver más</button>
                </article>
                <article>
                    <img src={logo4} alt="Reloj"/>
                <h2>Lorem, ipsum.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni mollitia blanditiis natus dicta error, cum alias ipsam libero odio impedit, fuga at dolore voluptatem illum pariatur cupiditate fugit, ullam amet?</p>
                    <h2>Precio: $999</h2>
                    <button>Ver más</button>
                </article>
            </main>
        </div>
    )
}

export default Productos;

