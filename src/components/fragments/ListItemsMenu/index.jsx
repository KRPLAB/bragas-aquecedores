export const ListItemsMenu = ({ link, text, children }) => {
    let targetLink = "_blank";
    if (link[0] === "#") {
        targetLink = "_self";
    }

    return (
        <li>
            <a href={link} target={targetLink} rel="noopener" className="font-paragraph-1">{children}{text}</a>
        </li>
    )
}