import style from '../css/Invest.module.css';
import trilhe from '../img/Trilhe.png';
import seuCaminho from '../img/seuCaminho.png';
import conosco from '../img/conosco.png';
import dolar from '../img/Dolar.png';
import invista from '../img/invistaImg.png';
import ScrollReveal from 'scrollreveal';
import React, { useRef, useEffect } from 'react';

function Invest() {
    const bottomRight = useRef(null);
     
    useEffect(() => {
        ScrollReveal().reveal(bottomRight.current, {
            delay: 1000,
            duration: 1000,
            distance: '200px',
            origin: 'bottom-right', 
            easing: 'ease-out'
        });
    }, []);

    const bottomLeft = useRef(null);
     
    useEffect(() => {
        ScrollReveal().reveal(bottomLeft.current, {
            delay: 300,
            duration: 1000,
            distance: '200px',
            origin: 'left', 
            easing: 'ease-out'
        });
    }, []);

    const left = useRef(null);
     
    useEffect(() => {
        ScrollReveal().reveal(left.current, {
            delay: 300,
            duration: 1000,
            distance: '200px',
            origin: 'left', 
            easing: 'ease-out'
        });
    }, []);

    const down = useRef(null);
     
    useEffect(() => {
        ScrollReveal().reveal(down.current, {
            delay: 300,
            duration: 1000,
            distance: '200px',
            origin: 'top', 
            easing: 'ease-out'
        });
    }, []);

    const up = useRef(null);
     
    useEffect(() => {
        ScrollReveal().reveal(up.current, {
            delay: 300,
            duration: 1000,
            distance: '200px',
            origin: 'bottom', 
            easing: 'ease-out'
        });
    }, []);

    const right = useRef(null);
     
    useEffect(() => {
        ScrollReveal().reveal(right.current, {
            delay: 300,
            duration: 1000,
            distance: '40px',
            origin: 'right', 
            easing: 'ease-out'
        });
    }, []);

    return (
        <section className={style.invest}>
            <img src={trilhe} className={style.trilheImg} ref={bottomRight} />
            <img src={seuCaminho} className={style.seuCaminhoImg} ref={bottomLeft} />
            <img src={conosco} className={style.conoscoImg} ref={left} />

            <div className={style.dolar}>
                <img src={dolar} ref={up} alt="Ícone do Dólar representando trade" />
                <p className={style.dolarDesc}><span>Praticidade</span> e <span>Segurança</span> na hora de investir.</p>
            </div>

            <div className={style.invista}>
                <img src={invista} ref={down} alt="Ícone de investimento representando a bolsa de valores" />
                <p className={style.invistaDesc}>Invista do <span>seu</span> jeito.</p>
            </div>

            <div className={style.lastDesc} ref={right}>
                <h1 className={style.lastDescTitle}>Faça investimentos com o B<span>ank</span>.O</h1>
                <p className={style.lastDescDescription}>Aqui você pode investir conosco, tornando as suas aplicações mais seguras e aumentando a sua rentabilidade</p>
                <div className={style.container}>
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
            </div>
        </section>
    );
}

export default Invest;