import React from 'react';
import { useFetchTodosQuery, useSendPostMutation } from '../store/apis/Todoapi';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';

const TodoList = () => {
    const {data} = useFetchTodosQuery();
    const [sendPost,results] = useSendPostMutation();
    const {isLoading,isSuccess} = results;

    const handlePost = () => {
        
        sendPost({
            title: 'foo99',
            body: 'bar99',
            userId: 199
        })

        console.log(results)
    }

    return (
        <>
        <h2>Todos</h2>
        {isLoading && <div style={{marginBottom:"19px"}}>Loading...</div>}
        {isSuccess && <div style={{marginBottom:"19px"}}>Record created</div>}
        <Button onClick={() => handlePost()} variant='contained'>Send Request</Button>
        <List>
            {data && data.map(item => <ListItem key={item.id} style={{ borderBottom: '1px solid #ccc' }}>{item.title}</ListItem>)}
        </List>
        
        </>
    )
}

export default TodoList;