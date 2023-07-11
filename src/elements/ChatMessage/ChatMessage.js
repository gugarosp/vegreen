import "./ChatMessage.scss"

const ChatMessage = (props) => {
    return (
        <div className={`chat-message chat-message-${props.type}`}>
            <div className="chat-message-content">
                <span className="chat-message-text">{props.children}</span>
                <span className="chat-message-date-hour">{props.dateHour}</span>
            </div>
        </div>
    )
}

export default ChatMessage;