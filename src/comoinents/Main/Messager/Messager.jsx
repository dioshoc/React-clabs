import Class from './Messager.module.css'
import Message from './Message/Message'
import User from './User/User'
function Messager(props) {

    let UserElements = props.UserData.map(data => <User id={data.id} name={data.name} key={data.id} />);
    let MessageElements = props.MessageData.map(data => <Message message={data.message} key={data.id} />);

    let sendMessage = () => {
        props.sendMessage()
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={Class.messager}>
            <div className={Class.dialogue}>
                {
                    UserElements
                }
            </div>
            <div className={Class.messages}>
                {
                    MessageElements
                }
                <div className={Class.prodaction}>
                    <textarea onChange={onMessageChange} value={props.newMessageText}></textarea>
                    <button onClick={sendMessage}>Send Message</button>
                </div>
            </div>
        </div >
    );
}

export default Messager