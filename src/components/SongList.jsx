import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSong, removeSong } from '../store/slices/Songslice';
import { reset } from '../actions';
import { Button } from '@mui/material';

const SongList = () => {

    const songs = useSelector(state => state.songs);
    const dispatch = useDispatch();

    const handleAdd = (song) => {
        dispatch(addSong(song));
    }

    const handleRemove = (song) => {
        dispatch(removeSong(song));
    }

    const handleReset = () => {
        dispatch(reset());
    }

    return (
        <div>
            <h2>Songs</h2>
            <Button onClick={() => handleAdd({title:"Song 7"})}>add</Button> <Button onClick={() => handleReset()}>Remove</Button>
            {songs && songs.map(item => <li key={item.title}>{item.title} 
                <button style={{margin:"10px"}} onClick={() => handleRemove(item.title)}>X</button>
            </li>)}
        </div>
    )
}

export default SongList;