import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessageList } from '../redux/messageList';

const MessageList = () => {
    const dispatch = useDispatch();
    const message = useSelector((state) => state.updateMessageList);

    useEffect(() => {
        dispatch(fetchMessageList());
    }, [dispatch]);

    return (<h1>{message.body}</h1>)
};

export default MessageList;