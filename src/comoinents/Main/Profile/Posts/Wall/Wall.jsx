
import Post from './Post/Post'
import Class from './Wall.module.css'

function Wall() {
    return (
        <div className={Class.wall}>
            <Post />
        </div>
    )
}

export default Wall