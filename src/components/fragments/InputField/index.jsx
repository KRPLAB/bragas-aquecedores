export const InputField = ({ label, type, placeholder, register, rules, errors }) => {
    return (
        <div>
            <label>{label}</label>
            <input type={type} placeholder={placeholder} {...register(label.toLowerCase(), rules)} />
            {errors[label.toLowerCase()] && <span>{label} é obrigatório</span>}
        </div>
    );
}
