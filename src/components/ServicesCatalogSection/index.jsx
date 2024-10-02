import { ListItemsServices } from "../fragments/ListItemServices";
import { services } from "../../data/services_catalog";
import styles from "./servicesStyle.module.scss";

export const ServicesCatalogSection = () => {
    return (
        <section className={styles.servicesSection}>
            <h2>Venda e Instalação</h2>

            <ul>
                {services.map((service, index) => (
                    <ListItemsServices 
                        key={index} 
                        addressImg={service.img} 
                        labelImg={service.service} 
                        classLi={styles.serviceCard}
                    />
                ))}
            </ul>
        </section>
    )
}