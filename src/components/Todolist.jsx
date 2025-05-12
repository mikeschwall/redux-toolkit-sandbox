import React from 'react';
import { useFetchTodosQuery, useSendPostMutation } from '../store/apis/Todoapi';
import { Button } from '@mui/material';

const TodoList = () => {

    
    const {data} = useFetchTodosQuery();
    const [sendPost,results] = useSendPostMutation();
    console.log(results);

    const handlePost = () => {
        sendPost({
            title: 'foo99',
            body: 'bar99',
            userId: 199,
        })
    }

    return (
        <div>
            <h2>Todos</h2>
            <Button onClick={() => handlePost()} variant='contained'>Make request</Button>
            {data && data.map(item => <li key={item.title}>{item.title}</li>)}
        </div>
    )
}

export default TodoList;