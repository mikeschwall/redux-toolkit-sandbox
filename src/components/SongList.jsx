import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { addSong, removeSong } from '../store/slices/Songslice';
import { reset } from '../actions';

const SongList = () => {

    const songs = useSelector(state => state.songs);
    const dispatch = useDispatch();

    const handleAdd = (song) => {
        dispatch(addSong(song))
    }

    const handleRemove = (song) => {
        dispatch(removeSong(song));
    }

    const handleReset = () => {
        dispatch(reset());
    }

    return <>
        <h2>Songs</h2>
        <Stack style={{marginBottom:"19px"}} spacing={2} direction="row">
      <Button onClick={() => handleAdd({title:"Song 5"})} variant="contained">Add Song</Button>
      <Button onClick={() => handleReset()} variant="outlined">Reset</Button>
    </Stack>
        {songs && songs.map(item => <ListItem key={item.title} style={{ borderBottom: '1px solid #ccc' }}>{item.title} <Button style={{position:"absolute",right:"0"}} onClick={() => handleRemove(item.title)} variant="text">X</Button></ListItem>)}
    </>
}

export default SongList;