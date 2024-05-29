import { ListItemsServices } from "../fragments/ListItemServices";
import { services } from "../../data/services_catalog";
import styles from "./servicesSection.module.scss";

export const ServicesCatalogSection = () => {
    return (
        <section className={styles.servicesSection} id="services">
            <h2 className="font-title-2">Venda e instalação</h2>
            <ul>
                {services.map((service, index) => (
                    <ListItemsServices key={index} addressImg={service.img} labelImg={service.service} classLi={styles.serviceCard} />
                ))}
            </ul>
        </section>
    )
}