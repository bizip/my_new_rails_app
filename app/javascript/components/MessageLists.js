import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessage } from '../redux/messageReducer';
import axios from 'axios';

const MessageLists = () => {
    const dispatch = useDispatch();
    const message = useSelector((state) => state.message);
    console.log(message)

    async function fetchMessage() {
        await axios.get('api/v1/messages').then((response) => {
            dispatch(getMessage(response.data.body));
        });
    }

    useEffect(() => {
        fetchMessage();
    }, []);

    return (
        <div>
            <h2>{message}</h2>
            <button onClick={() => fetchMessage()}>click to generate new greetings message</button>
        </div>
    );
};

export default MessageLists;