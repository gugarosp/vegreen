import "./Checkbox.scss"

const Checkbox = (props) => {
    return (
        <label className={`checkbox checkbox-${props.labelPosition} checkbox-${props.spacing}`}>
            <input type='checkbox' />

            <div className="checkbox-label">{props.children}</div>

            <div class="checkbox-element">
                <div class="checkbox-check">
                    <i class="fas fa-check"></i>
                </div>
                <div className="checkbox-box"></div>
            </div>
        </label>
    )
}

export default Checkbox;