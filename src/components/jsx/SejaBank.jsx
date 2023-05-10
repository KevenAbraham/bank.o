import style from '../css/SejaBank.module.css';
import mulher from '../img/MulherVerde.png';
import ScrollReveal from 'scrollreveal';
import React, { useRef, useEffect } from 'react';

function SejaBank() {
    const up = useRef(null);

    useEffect(() => {
        ScrollReveal().reveal(up.current, {
            delay: 500,
            origin: 'bottom',
            duration: 1000,
            distance: '50px',
            easing: 'ease-out'
        });
    }, []);

    const left = useRef(null);

    useEffect(() => {
        ScrollReveal().reveal(left.current, {
            delay: 500,
            origin: 'right',
            duration: 1000,
            distance: '50px',
            easing: 'ease-out'
        });
    }, []);

    const right = useRef(null);

    useEffect(() => {
        ScrollReveal().reveal(right.current, {
            delay: 500,
            duration: 1000,
            distance: '50px',
            origin: 'left',
            easing: 'ease-out'
        });
    }, []);

    return (
        <section className={style.sejaBank}>
            <h1 ref={left}>Seja</h1>
            <h2 ref={right}>Bank.O</h2>

            <img src={mulher} ref={up} alt="Imagem de uma mulher segurando um celular e sorrindo." />
        </section>
    );
}

export default SejaBank;