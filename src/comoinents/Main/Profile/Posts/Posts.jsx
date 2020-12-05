import Post from './Post/Post'
import Class from './Posts.module.css'

function Posts(props) {

    let PostElements = props.posts.map(data => <Post message={data.message} key={data.id} />);

    let addPosts = () => {
        props.addPosts();
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={Class.post}>
            <div className={Class.production}>
                <h1 className={Class.title}>My posts</h1>
                <textarea className={Class.input} onChange={onPostChange} value={props.newPostText} />
                <button onClick={addPosts} className={Class.btn}>Send</button>
            </div>

            <div className={Class.wall}>
                {
                    PostElements
                }
            </div>
        </div >
    )
}

export default Posts