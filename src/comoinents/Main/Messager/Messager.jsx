import Class from './Messager.module.css'

import Message from './Message/Message'
import User from './User/User'


function Messager() {
    return (
        <div className={Class.messager}>
            <div className={Class.dialogue}>
                <User />
                <User />
                <User />


            </div>
            <div className={Class.messages}>
                <Message />
            </div>
        </div >
    );
}

export default Messager