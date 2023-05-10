import style from '../css/BelowFooter.module.css';

function AboveFooter() {
    return (
        <div className={style.aboveFooter}>
            <p className={style.rights}>B<span>ank</span>.O &copy; Todos os direitos reservados</p>
            <p className={style.dev}>DEV: Keven Abraham de Souza</p>
        </div>
    );
}

export default AboveFooter;