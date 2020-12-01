import Class from './Message.module.css'

function Message() {
    return (
        <div className={Class.messege}>
            <img src="https://www.flaticon.com/svg/static/icons/svg/3802/3802143.svg" ></img>
            <div className={Class.text}>Hi, my name is Kangaroo!</div>
        </div>
    );
}

export default Message