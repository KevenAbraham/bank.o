import style from '../css/Info.module.css';
import celularCartao from '../img/cartaoCelular.png';
import ScrollReveal from 'scrollreveal';
import React, { useRef, useEffect, useState } from 'react';

function Info() {
    const left = useRef(null);

    useEffect(() => {
        ScrollReveal().reveal(left.current, {
            delay: 500,
            duration: 500,
            distance: '150px',
            origin: 'left',
            easing: 'ease-out'
        });
    }, []);

    const [imageLoaded, setImageLoaded] = useState(false);
    const lf = useRef(null);

    useEffect(() => {
        if (imageLoaded) {
            ScrollReveal().reveal(lf.current, {
                delay: 500,
                duration: 500,
                distance: '90px',
                origin: 'left',
                easing: 'ease-out'
            });
        }
    }, [imageLoaded]);

    const bottom = useRef(null);

    useEffect(() => {
        ScrollReveal().reveal(bottom.current, {
            delay: 500, 
            duration: 500,
            distance: '150px',
            origin: 'bottom',
            easing: 'ease-out'
        });
    }, []);

    const right = useRef(null);

    useEffect(() => {
        ScrollReveal().reveal(right.current, {
            delay: 500, 
            duration: 500,
            distance: '35px',
            origin: 'right',
            easing: 'ease-out'
        });
    }, []);

    return (
        <section className={style.info}>
            <img src={celularCartao} className={style.cartaoCelular} alt="Imagem do App mobile com com o cartão ao fundo do celular" ref={lf} onLoad={() => setImageLoaded(true)} style={{display: imageLoaded ? 'block' : 'none'}} />

            <div className={style.textAreaInfo}>
                <h1>evite a papelada</h1>
                <p className={style.infoDesc}>Faça tudo on-line no conforto da sua casa.</p>
                <div className={style.boxArea}>
                    <div className={style.boxInfoPix} ref={left}>
                        <div className={style.pixImg}></div>
                        <p className={style.boxDesc}>Pix instantâneo</p>
                    </div>
                    <div className={style.boxInfoBoleto} ref={bottom}>
                        <div className={style.boletoImg}></div>
                        <p className={style.boxDesc}>Pague sem burocracia</p>
                    </div>
                    <div className={style.boxInfoTransacao} ref={right}>
                        <div className={style.transacaoImg}></div>
                        <p className={style.boxDesc}>Transações seguras</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Info;