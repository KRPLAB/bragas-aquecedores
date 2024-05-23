import { useForm } from "react-hook-form";

export const ContactSection = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div>
            <h2>Contato</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Nome" {...register("name", { required: true, maxLength: 80 })} />
                <input type="tel" placeholder="Telefone" {...register("phone", { required: true, maxLength: 12 })} />
                <input type="text" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                <input type="text" placeholder="Assunto" {...register("subject", { required: true })} />
                <textarea {...register("Mensagem", { required: true })} />

                <input type="submit" />
            </form>
        </div>
    );
}