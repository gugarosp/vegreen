import "./Input.scss"

const Input = (props) => {
    return (
        <label className={`input input-${props.size}`}>
            <div className="input-content">
                <input type={props.inputType} placeholder={props.placeholder} disabled={props.disabled} value={props.children} />
                <span className="input-right">a</span>
            </div>
            <div className="input-message"></div>
        </label>
    )
}

export default Input;