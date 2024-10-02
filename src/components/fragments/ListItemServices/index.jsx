export const ListItemsServices = ({ addressImg, labelImg, classLi }) => {
    return (
        <li className={classLi}>
            <img src={addressImg} alt={`imagem referente ao serviço ${labelImg}`} />
            <span className="font-paragraph-bold">{labelImg}</span>
        </li>
    )
}