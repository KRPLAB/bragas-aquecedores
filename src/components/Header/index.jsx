import { ListItemsMenu } from "../fragments/ListItemsMenu";
import principal_logo from "../../assets/principal_logo.svg";
import styles from "./headerStyle.module.scss";

export const Header = () => {
    return (
        <header className={styles.headerSection}>
            <img src={principal_logo} alt="logomarca da empresa bragás aquecedores"></img>
            <ul>
                <ListItemsMenu link="#services" text="Serviços" /> |
                <ListItemsMenu link="#about" text="Quem somos" /> |
                <ListItemsMenu link="#contact" text="Contato" />
            </ul>
        </header>
    )
}