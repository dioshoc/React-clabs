import Class from './Messager.module.css'
import Message from './Message/Message'
import User from './User/User'
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { required } from '../../../utils/validators/validators';

function Messager(props) {
    let UserElements = props.UserData.map(data => <User id={data.id} name={data.name} key={data.id} />);
    let MessageElements = props.MessageData.map(data => <Message message={data.message} key={data.id} />);

    let NewMessageProduction = (values) => {
        props.addMessage(values.newMessageBody)
    }


    return (
        <div className={Class.messager}>
            <div className={Class.dialogue}>
                {
                    UserElements
                }
            </div>
            <div className={Class.messages}>
                <div className={Class.AreaMessages}>
                    {
                        MessageElements
                    }
                </div>

                <div className={Class.prodaction}>
                    <MessageProductionForm onSubmit={NewMessageProduction} />
                </div>
            </div>
        </div >
    );
}

const MessageProduction = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={Class.prodactionForm}>
            <Field component={Textarea}
                validate={[required]}
                name="newMessageBody"
                placeholder="Enter your message..."></Field>
            <button >Send Message</button>
        </form>
    )
}

const MessageProductionForm = reduxForm({ form: 'MessageProduction' })(MessageProduction)


export default Messager