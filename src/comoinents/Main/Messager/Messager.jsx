import Class from './Messager.module.css'

import Message from './Message/Message'
import User from './User/User'

function Messager(props) {

    let UserElement = props.State.UserData.map(data => <User id={data.id} name={data.name} />);
    let MessageElement = props.State.MessageData.map(data => <Message message={data.message} />);

    return (
        <div className={Class.messager}>
            <div className={Class.dialogue}>
                {
                    UserElement
                }

            </div>
            <div className={Class.messages}>
                {
                    MessageElement
                }
            </div>
        </div >
    );
}

export default Messager