import Class from './Message.module.css'

function Message(props) {
    return (
        <div className={Class.messege}>
            <img src="https://www.flaticon.com/svg/static/icons/svg/3802/3802143.svg" ></img>
            <div className={Class.text}>{props.message}</div>
        </div>
    );
}

export default Message