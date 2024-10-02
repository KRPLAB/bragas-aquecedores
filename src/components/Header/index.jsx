import styles from "./headerStyle.module.scss";
import principal_logo from "../../assets/logos/principal_logo.svg";

export const Header = () => {
    return (
        <header className={styles.headerSection}>
            <img src={principal_logo} alt="logomarca da empresa bragás aquecedores"></img>

            <ul>
                <li>Serviços</li> |
                <li>Quem Somos</li> |
                <li>Contato</li>
            </ul>
        </header>
    )
}