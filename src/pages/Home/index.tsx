import React from 'react';
import Header from '../../Components/header/index';
import Footer from '../../Components/Footer/index';
import './style.css';
import '../../assets/images/styles/global.css';
import cinema from '../../assets/images/cinema.png';
import theater from '../../assets/images/theater.png';



function Home() {
    return (
        <div className='Principal'>
            <Header description="Conheça nossa coletânea"/>
            <div className="home centro">
                <main>
                    <div id="texto">
                        <h1>Monte a sua coletânea de filmes...</h1>
                        <h2>Lorem ipsum eget sodales neque ultrices etiam nam enim</h2>
                        <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut eiusmod tempor incididunt ut labore  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit. </p>
                    </div>
                    <section className="Modos">
                        <div id="Filme">
                            <img src={cinema} alt="Imagem do rolinho de filme" id="Rolo" ></img>
                            <h2>Filmes</h2>
                            <p>Lorem ipsum eget sodales neque ultrices etiam nam enim, massa enim fusce diam hac porttitor primis, VELOZES E FURIOSOS</p>
                        </div>
                        <div id="Categoria">
                            <img src={theater} alt="Duas caras"></img>
                            <h2>Categorias</h2>
                            <p>Lorem ipsum eget sodales neque ultrices etiam nam enim, massa enim fusce diam hac porttitor primis, VELOZES E FURIOSOS</p>
                        </div>
                    </section>
                </main>
            </div>
            <Footer />
        </div>
    )
}
export default Home;