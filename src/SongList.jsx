import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSong, removeSong } from './store/slices/Songslice';
import { reset } from './actions';

const SongList = () => {

    const songs = useSelector((state) => state.songs);
    const dispatch = useDispatch();

    const handleRemove = useCallback((song) => {
        dispatch(removeSong(song))
    },[dispatch]);

    const handleAdd = useCallback((song) => {
        dispatch(addSong(song));
    },[dispatch]);
    

    const handleReset = useCallback(() => {
        dispatch(reset());
    },[dispatch]);

    return (
        <div>
            <h2>Songs</h2>
            <button onClick={() => handleAdd({title:"Song 5"})}>add</button> 
            <button onClick={() => handleReset()}>reset</button>
            {songs && songs.map(item => <li key={item.title}>{item.title} 
                <button onClick={() => handleRemove(item.title)}>X</button>
            </li>)}
        </div>
    )
}

export default SongList;