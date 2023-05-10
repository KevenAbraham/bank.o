import style from '../css/Home.module.css';
import mulher from '../img/Mulher.png';
import ScrollReveal from 'scrollreveal';
import React, { useRef, useEffect } from 'react';


function Home() {
    const right = useRef(null);
     
    useEffect(() => {
        ScrollReveal().reveal(right.current, {
            delay: 200,
            duration: 1000,
            distance: '100px',
            origin: 'right', 
            easing: 'ease-out'
        });
    }, []);

    const left = useRef(null);

    useEffect(() => {
        ScrollReveal().reveal(left.current, {
            delay: 500,
            duration: 750,
            distance: '150px',
            origin: 'left',
            easing: 'ease-out'
        });
    }, []);

    return (
        <section className={style.home}>
            <div className={style.textAreaHome} ref={left}>
                <p className={style.slogan}>simples rápido & objetivo</p>
                <p className={style.sloganDesc}>Assim como tudo deve ser.</p>
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
            <img src={mulher} alt="Imagem de uma mulher sorrindo segurando o cartão Bank.O" className={style.homeImg} ref={right} />
        </section>
    );
}

export default Home;