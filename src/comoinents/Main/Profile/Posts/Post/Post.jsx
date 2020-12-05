import Class from './Post.module.css'


function Post(props) {
    return (
        <div className={Class.item}>
            <img src="https://www.flaticon.com/svg/static/icons/svg/3802/3802095.svg" className={Class.img}></img>
            <p className={Class.text}>{props.message}</p>
        </div>
    )
}

export default Post