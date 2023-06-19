import "./Chip.scss"

const Chip = (props) => {
    return (
        <span className={`chip chip-${props.type} chip-${props.size} chip-${props.status}`}>
            {props.children}
        </span>
    )
}

export default Chip;