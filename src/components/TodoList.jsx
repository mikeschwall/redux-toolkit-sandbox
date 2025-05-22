import React from 'react';
import { useFetchTodosQuery, useSendPostMutation } from '../store/apis/Todoapi';

const TodoList = () => {

    const {data} = useFetchTodosQuery();
    const [sendPost,results] = useSendPostMutation();

    const handleSend = () => {
        sendPost({
            title: 'foo99',
    body: 'bar99',
    userId: 199
        })
        console.log(results);
    }

    return (
        <div>
            <h2>Todos</h2>
            <button onClick={() => handleSend()}>send</button>
            {data && data.map(item => <li key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default TodoList;