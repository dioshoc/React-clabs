
import Class from './Posts.module.css'
import Production from './Production/Production'
import Wall from './Wall/Wall'

function Posts() {
    return (
        <div className={Class.post}>
            <Production />
            <Wall />
        </div >
    )
}

export default Posts