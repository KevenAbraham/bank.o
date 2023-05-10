import style from '../css/Header.module.css';
import logo from '../img/Logo.png';
import {FaCaretRight} from 'react-icons/fa';

function Header() {
    return(
        <header>
            <img src={logo} alt="Logo Bank.O" />
            <div className={style.middleHeader}>
                <div className={style.listElements}>
                    <p>para você</p>
                    <p className={style.caret1}><FaCaretRight /></p>
                </div>
                <div className={style.listElements}>
                    <p>para empresas</p>
                    <p className={style.caret2}><FaCaretRight /></p>
                </div>
                <div className={style.listElements}>
                    <p>fale conosco</p>
                    <p className={style.caret3}><FaCaretRight /></p>
                </div>
            </div>
            <div className={style.buttons}>
                <p className={style.btnAcesse}><span>Acesse</span></p>
                <p className={style.btnAbraSuaConta}><span>Abra sua Conta</span></p>
            </div>
        </header>
    );
}

export default Header;