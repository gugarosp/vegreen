import "./Radio.scss"

const Radio = (props) => {
    return (
        <label className={`radio radio-${props.labelPosition} radio-${props.spacing}`}>
            <input type='radio' name={props.name} />

            <div className="radio-label">{props.children}</div>

            <div className="radio-element">
                <div className="radio-check"></div>
                <div className="radio-box"></div>
            </div>
        </label>
    )
}

export default Radio;