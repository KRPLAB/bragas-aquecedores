import { useForm } from "react-hook-form";
import { InputField } from "../fragments/InputField";
import { TextAreaField } from "../fragments/TextAreaField";
import styles from "./contactStyle.module.scss";

export const ContactSection = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <section className={styles.contactSection}>
            <h2>Contato</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <InputField
                    label="Nome"
                    type="text"
                    placeholder="Digite seu nome completo"
                    register={register}
                    rules={{ required: true, maxLength: 80 }}
                    errors={errors}
                />
                <InputField
                    label="Telefone"
                    type="tel"
                    placeholder="Insira um telefone para contato"
                    register={register}
                    rules={{ required: true, maxLength: 12 }}
                    errors={errors}
                />
                <InputField
                    label="Email"
                    type="text"
                    placeholder="Insira um email para contato"
                    register={register}
                    rules={{ required: true, pattern: /^\S+@\S+$/i }}
                    errors={errors}
                />
                <InputField
                    label="Assunto"
                    type="text"
                    placeholder="Descreva resumidamente o assunto do seu contato"
                    register={register}
                    rules={{ required: true }}
                    errors={errors}
                />
                <TextAreaField
                    label="Mensagem"
                    register={register}
                    rules={{ required: true }}
                    errors={errors}
                    classTextArea={styles.textAreaBox}
                />
                <button type="submit">Enviar</button>
            </form>
        </section>
    )
}