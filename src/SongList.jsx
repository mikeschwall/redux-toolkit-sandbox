import { useDispatch, useSelector } from "react-redux";
import { addSong, removeSong } from "./store/slices/Songslice";
import { reset } from "./actions";

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
            <button onClick={() => handleAdd({title:"song 7"})}>add</button> 
            <button onClick={() => handleReset()}>Reset</button>
            <div style={{marginTop:"10px"}}>
            {songs && songs.map(item => <li key={item.title}>{item.title} 
                <button style={{marginLeft:"10px"}} onClick={() => handleRemove(item.title)}>X</button>
            </li>)}
            </div>
        </div>
    )
}

export default SongList;