import { useRef } from 'react'
import Video from './videos/Video'

function UseInperativeHandle() {
    const videoRef = useRef()

    console.log(videoRef) // current: {play: ƒ, pause: ƒ}

    const handlePlay = () => {
        videoRef.current.play()
    }

    const handlePause = () => {
        videoRef.current.pause()
    }

    return (
        <>
            <Video ref={videoRef} />
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
        </>
    )
}

export default UseInperativeHandle