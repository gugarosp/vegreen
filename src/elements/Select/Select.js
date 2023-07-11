import "./Select.scss"

const Select = (props) => {
    return (
        <div className={`select select-${props.size} select-${props.type}`}>
            <div className="select-content">
                <div className="select-chosen">
                    <span className="select-text">
                        Selected
                    </span>
                </div>
                <div className="select-dropdown">
                    <div className="select-dropdown-content">
                        <ul>
                            {props.items.map((item, index) => {
                                return (
                                    <li key={`key-${index}`}>{item}</li>
                                )}
                            )}
                        </ul>
                    </div>
                </div>
            </div>
            <select>
                {props.items.map((item, index) => {
                    return (
                        <option key={`key-${index}`}>{item}</option>
                    )}
                )}
            </select>
        </div>
    )
}

export default Select;