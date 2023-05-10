import style from '../css/Footer.module.css';
import Logo from '../img/WhiteLogo.png';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <div className={style.logoArea}>
                <div className={style.line}></div>
                <img src={Logo} alt="Imagem do logo branco para o Footer" />
                <div className={style.line}></div>
            </div>

            <ul>
                <li>termos</li>
                <li>ajuda</li>
                <li>início</li>
                <li>política de privacidade</li>
                <li>apps</li>
                <li>fale conosco</li>
                <li className={style.socialMedia}>
                    <p>Midias sociais</p>
                    <div className={style.socialIcons}>
                        <FaInstagram />
                        <FaFacebook />
                        <FaPinterest />
                        <FaTiktok />
                        <FaTwitter />
                    </div>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;