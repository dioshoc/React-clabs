import Class from './Posts.module.css'
import Production from './Production/Production'
import Wall from './Wall/Wall'




function Posts(props) {
    return (
        <div className={Class.post}>
            <Production />
            <Wall State={props.State} />
        </div >
    )
}




export default Posts