import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSong, removeSong } from '../store/slices/songslice';
import { reset } from '../actions';

const SongList = () => {

    const songs = useSelector(state => state.songs);
    const dispatch = useDispatch();

    const handleAdd = (song) => {
        dispatch(addSong({title:song}))
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
            <button onClick={() => handleAdd("song 7")}>add</button> <button onClick={() => handleReset()}>reset</button>
            {songs && songs.map(item => <li key={item.title}>{item.title} 
                <button onClick={() => handleRemove(item.title)}>X</button>
            </li>)}
        </div>
    )
}

export default SongList;