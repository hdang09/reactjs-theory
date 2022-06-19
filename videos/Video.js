import { forwardRef, useImperativeHandle, useRef } from 'react'

import videoUrl from './video-1.mp4'

function Video(props, ref) {

    const videoRef = useRef() // html

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        },
    }))

    return (
        <video 
            src={videoUrl}
            width={250}
            ref={videoRef}
            // ref={ref}
        />
    )
}

export default forwardRef(Video)
