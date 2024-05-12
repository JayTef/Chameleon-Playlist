



export const playAudio = (isPlaying, audioRef) => {

    // Add an event listener to play the song once it's loaded
    const playWhenReady = () => {
        if (isPlaying) audioRef.current.play();
        audioRef.current.removeEventListener('loadeddata', playWhenReady);
    };

    audioRef.current.addEventListener('loadeddata', playWhenReady);
};


