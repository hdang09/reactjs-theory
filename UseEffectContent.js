import { useState, useEffect } from 'react'

// Solve 'side effects'

// Events: Add / Remove event listener
// Observer patter: Subscribe / Unsubscribe
// Closure
// Timers: setTimeout, setInterval, clearInterval, clearTimeout
// useState
// Mounted / Unmounuted
// ===
// Call API

/** useEffect
 * 1. Update DOM
 *    - Title website
 * 2. Call API
 * 3. Listen DOM events
 *    - Scroll
 *    - Resize
 * 4. Cleanup
 *    - Remove listener / Unsubscribe
 *    - Clear timer
 */

/** 3 ways using useEffect
 * 1. useEffect(callback)
 *  - Call callback everytime when component is re-rendered
 * 2. useEffect(callback, [])
 *  - Only call callback ONE time after component is re-rendered
 * 3. useEffect(callback, [deps])
 *  - Callback will be called again when deps changed before and after
 */

/** Both 3 ways using useEffect
 * 1. Callback is called after a component is mounted
 * 2. Cleanup function is called BEFORE a component is unmounuted
 * 3. Cleanup function is called BEFORE callback is called (except 
 * a component is mounted the first time)
 */

export default function UseEffectContent() {
    
    const resources = [
        'posts', 
        'comments', 
        'albums', 
        'photos', 
        'todos', 
        'users'
    ]
    
    // Set title of the browser
    const [title, setTitle] = useState('')
    useEffect(() => {
        document.title = title
    })
    
    
    
    // Call API to show resources
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then(posts => setPosts(posts))
    }, [type])
    
    
    
    // Listen DOM event: Show 'go-to-top' button
    const [showGoToTop, setShowGoToTop] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setShowGoToTop(window.scrollY >= 200)
        }

        window.addEventListener('scroll', handleScroll)

        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])



    // Listen DOM event: Show width of the browser
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    


    // useEffect with timer function: countdown
    const [countdown, setCountdown] = useState(300)
    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(prevState => prevState - 1)
        }, 1000)

        return () => clearInterval(timer)
    }, [])
        // or
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setCountdown(countdown - 1)
    //     }, 1000)

    //     return () => clearTimeout(timer)
    // }, [countdown])

    

    // Show preview of the image
    const [imgURL, setImgURL] = useState()
    useEffect(() => {
        return () => {
            imgURL && URL.revokeObjectURL(imgURL)
        }
    }, [imgURL])

    const handlePreviewImage = (e) => {
        let img = e.target.files[0]
        setImgURL(URL.createObjectURL(img))
    }



    // Fake chat app
    const courses = [
        '36. useEffect with DOM events',
        '37. useEffect with dependencies',
        '38. useEffect with timer functions',
    ]

    const [activeCourse, setActiveCourse] = useState(0)

    useEffect(() => {

        const handleCall = (e) => {
            console.log(e.detail)
        }

        window.addEventListener('lesson-1', handleCall)

        // return () => {
        //     window.removeEventListener(`lesson-1`, handleCall)
        // }
    }, [])

    
    return (
        <div>
            {/* Fake chat app */}
            {courses.map((course, index) => 
                <li 
                    key={index}
                    style={index === activeCourse ? {color: 'peru'} : {color: '#000'}}
                    onClick={() => setActiveCourse(index)}
                >
                    {course}
                </li>
            )}


            {/* Show preview image */}
            <input 
                type="file"
                onChange={handlePreviewImage}
            />
            <img src={imgURL} alt="" width="50%"/>


            {/* Countdown button */}
            <h1>{countdown}</h1>


            {/* Show width of browser when resize */}
            <h1>
                Width: {width}
            </h1>


            {/* Input show 6 buttons of resources */}
            {resources.map(resource => (
                <button
                    style={type === resource ? { 
                        backgroundColor: '#000', 
                        color: '#fff' 
                    } : {}}
                    value={resource}
                    key={resource}
                    onClick={() => setType(resource)}
                >
                    {resource}
                </button>
            ))}
            

            {/* Set tilte of the browser */}
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            

            {/* Show list of posts, comments, ... */}
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>


            {/* 'Go To Top' button */}
            {showGoToTop && 
            <button
                style={{
                    position: 'fixed',
                    right: 25,
                    bottom: 25
                }}
            >
                Go Top
            </button>}
        </div>
    )
}