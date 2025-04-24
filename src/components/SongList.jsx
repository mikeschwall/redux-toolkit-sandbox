import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { Typography } from '@mui/material';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import {Divider} from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Button} from '@mui/material';
import { addSong, removeSong } from '../store/slices/Songslice';
import { reset } from '../actions';

const SongList = () => {

    const songs = useSelector(state => state.songs);
    const dispatch = useDispatch();

    const handleRemove = (song) => {
        dispatch(removeSong(song))
    }

    const handleAdd = (song) => {
        dispatch(addSong(song))
    }

    const handleReset = () => {
        dispatch(reset())
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);  // Set anchor element
  };

  const handleMenuClose = () => {
    setAnchorEl(null);  // Close menu
  };

    return (
        <>
        <h2 style={{width:"100%"}}>Songs</h2>
        <div style={{display:"flex",alignItems:"center",margin:"0 auto"}}>
        <Button onClick={handleMenuClick}>Open Menu</Button>
        <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
        <MenuItem onClick={() => handleAdd({title:"song 7"})}>Add Song</MenuItem>
        <MenuItem onClick={() => handleReset()}>Reset</MenuItem>
        
      </Menu>
            <List sx={{ width: '100%',maxWidth:"300px",margin:"0 auto", bgcolor: 'background.paper' }}>
            {songs && songs.map(item => <ListItem key={item.title} alignItems="flex-start">
        <AudiotrackIcon/>
        <ListItemText
          primary={item.title}
          
        />
        <Button onClick={() => handleRemove(item.title)}>X Delete</Button>
      </ListItem>)}
      
            </List>
        </div>
        </>
    )
}

export default SongList;