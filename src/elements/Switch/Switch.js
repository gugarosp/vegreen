import "./Switch.scss"

const Switch = (props) => {
    return (
        <label className={`switch switch-${props.labelPosition} switch-${props.spacing}`}>
            <input type='checkbox' />

            <div className="switch-label">{props.children}</div>

            <div className="switch-element">
                <div className="switch-background"></div>
                <div className="switch-handler"></div>
            </div>
        </label>
    )
}

export default Switch;