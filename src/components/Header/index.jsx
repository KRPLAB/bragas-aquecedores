import styles from "./headerStyle.module.scss";

export const Header = () => {
    return (
        <header className={styles.headerSection}>
            <ul>
                <li>Serviços</li> |
                <li>Quem Somos</li> |
                <li>Contato</li>
            </ul>
        </header>
    )
}