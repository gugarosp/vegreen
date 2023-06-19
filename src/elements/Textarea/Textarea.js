import "./Textarea.scss"

const Textarea = (props) => {
    return (
        <label className={`textarea textarea-${props.size}`}>
            <div className="textarea-content">
                <textarea placeholder={props.placeholder} disabled={props.disabled} value={props.children}></textarea>
            </div>
            <div className="textarea-message"></div>
        </label>
    )
}

export default Textarea;