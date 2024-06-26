import { playAudio } from "../util";



const LibrarySong = ({
    song,
    songs,
    setCurrentSong,
    id,
    audioRef,
    isPlaying,
    setSongs,
    activeSongId,
}) => {

    const songSelectHandler = async () => {
        const selectedSong = songs.filter((state) => state.id === id);
        await setCurrentSong(selectedSong[0]);

        // Set Active in library
        const newSongs = songs.map((song) => {
            if (song.id === id) {
                return {
                    ...song,
                    active: true,
                };
            } else {
                return {
                    ...song,
                    active: false,
                };
            }
        });
        setSongs(newSongs);

        playAudio(isPlaying, audioRef)
    }

    return (
        <div onClick={songSelectHandler}
            className={`library-song ${song.active ? `selected` : ""}`}
        >
            <img alt={song.name} src={song.cover}></img>
            <div className="song-description">
                <h3 style={{ color: 'white' }} >{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}


export default LibrarySong;