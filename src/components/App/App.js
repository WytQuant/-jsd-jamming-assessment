import './App.css';
import {useState} from 'react'
import SearchBar from "../SearchBar/SearchBar"
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../utils/Spotify';

function App() {

  // creating state

  const [trackResults, setTrackResults] = useState([])

  const [ playlistName, setPlaylistName] = useState('New playlist');

  const [playlistTracks, setPlaylistTracks] = useState([]);

  //Add and remove section
  
  function addTrack(track) {
    const isTrackExisting = playlistTracks.find(playlistTrack => {
      return playlistTrack.id === track.id;
    });

    if (isTrackExisting) {
      return;
    };

    setPlaylistTracks(prev => ([
      ...prev,
      track
    ]))
  }

  function removeTrack(track) {
   setPlaylistTracks(playlistTracks.filter(playlistTrack => {
     return playlistTrack.id !== track.id
   }))
  }

  function updatePlaylistName(name) {
    setPlaylistName(name);
  }

  //Save playlist section
  function savePlaylist() {
    const trackUris = playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName(prevName => (prevName = "New playlist"));
      setPlaylistTracks([]);
    })
  }

  // searching track user want
  function search(term) {
    Spotify.search(term).then(trackResults => {
      setTrackResults(trackResults);
    });
  }

  console.log(trackResults);
  console.log(playlistTracks);

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar 
          onSearch={search}
        />
        <div className="App-playlist">
          <SearchResults 
            searchResults={trackResults} 
            onAdd={addTrack}
          />
          <Playlist 
            playlistName={playlistName} 
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;
