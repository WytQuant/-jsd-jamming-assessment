import './Playlist.css';
import TrackList from '../TrackList/TrackList';

function Playlist(props) {
  const {playlistTracks, onRemove, onNameChange, onSave, playlistName} = props;

  function handleNameChange({ target }) {
    const playlistName = target.value;
    onNameChange(playlistName)
  }

  return (
    <div className="Playlist">
      <input 
        type="text"
        onChange={handleNameChange}
        value={playlistName}
      />

      <TrackList 
        tracks={playlistTracks}
        onRemove={onRemove}
        isRemoval={true}
      />
      
      <button className="Playlist-save" onClick={onSave}>SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
