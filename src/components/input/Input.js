import React from 'react'
import './input.css'
const Input = ({ message, setMessage, sendMessage }) => {
    return (
        <div className="bottom">
            <form>
                <input value={message}
                    placeholder="Type a message..."
                    type="text"
                    className="input"
                    onChange={(event) => setMessage(event.target.value)}
                    onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null}
                />
                <button className="sendButton" onClick={(event) => sendMessage(event)}>Send</button>
            </form>
        </div>
    )
}
export default Input