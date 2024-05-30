export const TextAreaField = ({ label, register, rules, errors, classTextArea }) => {
    return (
        <div className={classTextArea}>
            <label>{label}</label>
            <textarea className="default__input" {...register(label.toLowerCase(), rules)} />
            {errors[label.toLowerCase()] && <span className="error-input">{label} é obrigatório</span>}
        </div>
    );
}