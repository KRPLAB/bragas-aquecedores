import styles from "./footerStyle.module.scss";
import principal_logo from "../../assets/logos/Bragás_Logo principal - branco.png";
import whats from "../../assets/icones/whats.png";
import face from "../../assets/icones/face.png";
import insta from "../../assets/icones/insta.png";

export const Footer = () => {
    return (

        <footer className={styles.footerSection}>
            <div className={styles.brandFooterInfos}>
                <div className={styles.brandLogo}>
                    <img src={principal_logo} alt="logomarca" />
                </div>

                <div className={styles.brandContact}>
                    <span className="font-text-1">
                        <img src={whats} alt="logotipo whatsapp" />
                        (41) 99581-2924
                    </span>
                    <span className="font-text-1">(41) 3319-3227</span>
                    <p className="font-text-1">bragasaquecedores@yahoo.com.br</p>
                    <p className="font-text-1">Rua Guilherme Weigert, 160 - loja 03 - Roça Grande, Colombo - PR</p>
                    <p className="font-text-1">seg à sex: 08:30 – 18:00 | sáb: 08:30 – 13:00</p>
                </div>

                <div className={styles.brandSocialMedia}>
                    <p className="font-text-1">Redes sociais</p>
                    <img src={face} alt="" />
                    <img src={insta} alt="" />
                    <p className="font-text-1">&copy; 2013 - 2024 Bragás</p>
                </div>
            </div>
        </footer>
    )
}