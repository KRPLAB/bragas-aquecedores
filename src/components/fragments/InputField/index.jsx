export const InputField = ({ label, type, placeholder, register, rules, errors }) => {
    return (
        <div>
            <label className="font-text-1">{label}</label>
            <input className="default__input" type={type} placeholder={placeholder} {...register(label.toLowerCase(), rules)} />
            {errors[label.toLowerCase()] && <span className="error-input">{label} é obrigatório</span>}
        </div>
    );
}
