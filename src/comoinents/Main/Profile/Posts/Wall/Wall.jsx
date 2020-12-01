import Post from './Post/Post'
import Class from './Wall.module.css'

function Wall(props) {

    let PostElements = props.State.PostData.map(data => <Post message={data.message} />);

    return (
        <div className={Class.wall}>
            { PostElements}
        </div>
    )
}

export default Wall