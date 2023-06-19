import "./Checkbox.scss"

const Checkbox = (props) => {
    return (
        <label className="checkbox">
            <input type='checkbox' />
            <div className="checkbox-box"></div>
            <div class="checkbox-check"></div>
        </label>
    )
}

export default Checkbox;