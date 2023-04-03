import "./Tabs.scss"

const Tabs = (props) => {
    return (
        <div className={`tabs tabs-${props.type} tabs-${props.status}`}>
            <ul>
                {props.items.map((item, index) => {
                    return (
                        <li key={`key-${index}`}>{item}</li>
                    )}
                )}
            </ul>
        </div>
    )
}

export default Tabs;