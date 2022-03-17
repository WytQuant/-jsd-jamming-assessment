import './Track.css';

function Track(props) {
  const {track, onAdd, onRemove, isRemoval} = props;

  function addTrack() {
    onAdd(track);
  }

  function removeTrack() {
    onRemove(track);
  }

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track.name}</h3>
        <p>{track.artist} | {track.album}</p>
      </div>
      {isRemoval ?
      <button className="Track-action" onClick={removeTrack}>-</button> :
      <button className="Track-action" onClick={addTrack}>+</button>}
    </div>
  );
}

export default Track;
