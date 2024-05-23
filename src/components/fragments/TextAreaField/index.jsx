export const TextAreaField = ({ label, register, rules, errors }) => {
    return (
        <div>
            <label>{label}</label>
            <textarea {...register(label.toLowerCase(), rules)} />
            {errors[label.toLowerCase()] && <span>{label} é obrigatório</span>}
        </div>
    );
}