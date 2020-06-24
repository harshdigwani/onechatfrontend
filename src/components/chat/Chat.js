import React, { useState, useEffect } from 'react'
import queryString from "query-string";
import io from 'socket.io-client';
import './chat.css';
import Infobar from '../infobar/Infobar';
import Input from '../input/Input';
import Messages from '../messages/Messages';
import TextContainer from '../textContainer/TextContainer';

let socket;

const Chat = ({ location }) => {

    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [error, setError] = useState(false);
    const URL = "https://onechatbackend.herokuapp.com/"

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
        setRoom(room);
        setName(name);
        socket = io(URL);
        socket.emit('join', { name, room }, (error) => {
            if (error) setError(error);
            console.log(error);
        });

        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [URL, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message])
        })
    }, [messages]);


    const sendMessage = (event) => {
        event.preventDefault();
        socket.emit('sendMessage', message, () => {
            setMessage('');
        })
    }

    return (
        <div>
            <div className="outerContainer">
                <div className="container">
                    <Infobar room={room} />
                    <Messages messages={messages} name={name} />
                    <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
                </div>
            </div>
        </div>
    )
}

export default Chat;