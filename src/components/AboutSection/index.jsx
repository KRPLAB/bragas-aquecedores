import { SliderGallery } from "../fragments/SliderGallery";
import styles from "./aboutStyles.module.scss";

export const AboutSection = () => {
    return (
        <section className={styles.aboutSection} id="about">
            <h2 className="font-title-2">Quem Somos</h2>
            <p className="font-title-3">A Bragás Aquecedores é uma empresa de aquecedores localizada no bairro Roça Grande em Colombo - PR, ela começou em 2013 com Gildo Braga.</p>
            <SliderGallery />
            <div className={styles.declaration}>
                <p className="font-title-3">“A Bragás Aquecedores trabalha nesse segmento para proporcionar conforto ao cliente!” - Gildo Braga</p>
            </div>
        </section>
    )
}