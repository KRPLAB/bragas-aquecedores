import banner from "../../assets/fotografias/Artboard 1.png";
import styles from "./bannerSection.module.scss";

export const BannerSection = () => {
    return (
        <section className={styles.bannerSection}>
            <div className={styles.bannerImg}>
                <div className={styles.cover}>
                    <img src={banner} alt="Banner" className={styles.overlayImg} />
                </div>

                <div className={styles.overlay}>
                    <span className={`${styles.overlayText} font-title-1`}>Venda, instalação e manutenção em equipamentamentos a gás.</span>
                    <span className={`${styles.overlayText} font-title-1`}>Entre em contato e solicite um orçamento!</span>
                </div>
            </div>
        </section>
    );
};
