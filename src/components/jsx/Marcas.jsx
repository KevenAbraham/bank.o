import style from '../css/Marcas.module.css';
import adidas from '../img/adidas.png';
import Amazon from '../img/Amazon.png';
import netflix from '../img/Netflix.png';
import spotify from '../img/Spotify.png';
import adobe from '../img/adobe.png';
import apple from '../img/apple.png';
import airbnb from '../img/airbnb.png';
import uber from '../img/ubber.png';
import ScrollReveal from 'scrollreveal';
import React, { useRef, useEffect } from 'react';

function Marcas() {
    const down = useRef(null);
     
    useEffect(() => {
        ScrollReveal().reveal(down.current, {
            delay: 200,
            duration: 1000,
            distance: '80px',
            origin: 'top', 
            easing: 'ease-out'
        });
    }, []);

    const downBtn = useRef(null);

    useEffect(() => {
        ScrollReveal().reveal(downBtn.current, {
            delay: 500,
            duration: 1000,
            origin: 'bottom',
            distance: '50px',
            easing: 'ease-in-out'
        });
    }, []);

    return (
        <section className={style.marcas} >
            <h1 className={style.marcasTitle} ref={down}>Compre nas suas marcas preferidas</h1>
        
            <div className={style.logos}>
                <div className={style.marcasImagens}>
                    <img src={adidas} alt="Logomarca da Adidas" />
                    <img src={Amazon} alt="Logomarca da Amazon" />
                    <img src={netflix} alt="Logomarca da Netflix" />
                    <img src={spotify} alt="Logomarca do Spotify" />
                    <img src={uber} alt="Logomarca do UBER" />
                    <img src={airbnb} alt="Logomarca do AirBnB" />
                    <img src={adobe} alt="Logomarca do Adobe" />
                    <img src={apple} alt="Logomarca do Apple" />
                </div>
                <div className={style.marcasImagens}>
                    <img src={adidas} alt="Logomarca da Adidas" />
                    <img src={Amazon} alt="Logomarca da Amazon" />
                    <img src={netflix} alt="Logomarca da Netflix" />
                    <img src={spotify} alt="Logomarca do Spotify" />
                    <img src={uber} alt="Logomarca do UBER" />
                    <img src={airbnb} alt="Logomarca do AirBnB" />
                    <img src={adobe} alt="Logomarca do Adobe" />
                    <img src={apple} alt="Logomarca do Apple" />
                </div>
            </div>

            <div className={style.containerMarcas} ref={downBtn}>
                <div className={style.center}>
                    <button className={style.btn}>
                        <svg width="180px" height="60px" viewBox="0 0 180 60" className={style.border}>
                            <polyline points="179,1 179,59 1,59 1,1 179,1" className={style.bgline} />
                            <polyline points="179,1 179,59 1,59 1,1 179,1" className={style.hlline} />
                        </svg>
                        <span>abra sua conta</span>
                    </button>
                </div>
            </div>            
        </section>
    );
}

export default Marcas;