import "./Radio.scss"

const Radio = (props) => {
    return (
        <label className={`radio radio-${props.labelPosition} radio-${props.spacing}`}>
            <input type='radio' name={props.name} />

            <div className="radio-label">{props.children}</div>

            <div class="radio-element">
                <div class="radio-check"></div>
                <div className="radio-box"></div>
            </div>
        </label>
    )
}

export default Radio;