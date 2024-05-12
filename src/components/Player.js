
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlay,
    faAngleLeft,
    faAngleRight,
    faPause,
} from "@fortawesome/free-solid-svg-icons";
import { playAudio } from "../util";



const Player = ({
    audioRef,
    currentSong,
    isPlaying,
    setIsPlaying,
    setSongInfo,
    songInfo,
    setCurrentSong,
    songs,
    setSongs,

}) => {

    const activeLibraryHandler = (nextPrev) => {
        const newSongs = songs.map((song) => {
            if (song.id === nextPrev.id) {
                return {
                    ...song,
                    active: true,
                }
            } else {
                return {
                    ...song,
                    active: false,
                }
            }
        });
        setSongs(newSongs)
    }


    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause()
            setIsPlaying(!isPlaying)
        } else {
            audioRef.current.play()
            setIsPlaying(!isPlaying)
        }
    }

    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }


    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value
        setSongInfo({ ...songInfo, currentTime: e.target.value })
    }


    const skipTrackHandler = async (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id)
        if (direction === "skip-forward") {
            let nextSong = songs[(currentIndex + 1) % songs.length];
            await setCurrentSong(nextSong);
            activeLibraryHandler(nextSong)
        }
        if (direction === "skip-back") {
            let prevSong = songs[songs.length - 1];
            if ((currentIndex - 1) % songs.length === -1) {
                await setCurrentSong(prevSong);
                activeLibraryHandler(prevSong);
                // if (isPlaying) audioRef.current.play()
                playAudio(isPlaying, audioRef)
                return
            }
            prevSong = songs[(currentIndex - 1) % songs.length];
            await setCurrentSong(prevSong);
            activeLibraryHandler(prevSong);
        }
        // if (isPlaying) audioRef.current.play()
        playAudio(isPlaying, audioRef)
    }



    const trackAnim = {
        transform: `translateX(${songInfo.animationPercentage}%)`
    }

    return (
        <div className="player">
            <div style={{ color: '#cccccc' }} className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <div
                    style={{
                        background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
                    }} className="track"
                >
                    <input
                        min={0}
                        max={songInfo.duration || 0}
                        value={songInfo.currentTime}
                        onChange={dragHandler}
                        type="range"
                    />
                    <div style={trackAnim} className="animate-track"></div>
                </div>
                <p>{getTime(songInfo.duration || 0)}</p>
            </div>
            <div style={{ color: 'white' }} className="play-control">
                <FontAwesomeIcon
                    className="skip-back"
                    size="2x"
                    icon={faAngleLeft}
                    onClick={() => skipTrackHandler('skip-back')}
                />
                <FontAwesomeIcon
                    onClick={playSongHandler}
                    className="play"
                    size="2x"
                    icon={isPlaying ? faPause : faPlay}
                />
                <FontAwesomeIcon
                    className="skip-forward"
                    size="2x"
                    icon={faAngleRight}
                    onClick={() => skipTrackHandler('skip-forward')}

                />

            </div>
        </div>
    );
}


export default Player;