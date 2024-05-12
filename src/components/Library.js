import LibrarySong from "./LibrarySong"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Library = ({ songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus }) => {

    return (
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2 style={{ color: 'white' }}>Playlist {' '}
                <FontAwesomeIcon icon={faMusic} />
            </h2>
            <div className="library-songs">
                {songs.map(song => (
                    <LibrarySong
                        songs={songs}
                        setCurrentSong={setCurrentSong}
                        song={song}
                        id={song.id}
                        key={song.id}
                        audioRef={audioRef}
                        isPlaying={isPlaying}
                        setSongs={setSongs}
                    />
                ))}
            </div>
        </div>
    );
};

export default Library;