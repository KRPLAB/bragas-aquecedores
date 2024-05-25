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
                    <span>
                        <img src={whats} alt="logotipo whatsapp" />
                        (41) 99581-2924
                    </span>
                    <span>(41) 3319-3227</span>
                    <p>bragasaquecedores@yahoo.com.br</p>
                    <p>Rua Guilherme Weigert, 160 - loja 03 - Roça Grande, Colombo - PR</p>
                    <p>seg à sex: 08:30 – 18:00 | sáb: 08:30 – 13:00</p>
                </div>

                <div className={styles.brandSocialMedia}>
                    <p>Redes sociais</p>
                    <img src={face} alt="" />
                    <img src={insta} alt="" />
                    <p>&copy; 2013 - 2024 Bragás</p>
                </div>
            </div>

            <div className={styles.teamDevInfo}>
                <p>UX/UI - Raissa Lizieri Leite Mellado</p>
                <p>Web Dev - Kauan da Rosa Paulino</p>
            </div>
        </footer>
    )
}