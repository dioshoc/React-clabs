import Class from './Posts.module.css'
import fish from "../../../../assets/img/fish.svg";
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../../utils/validators/validators';
import { Textarea } from '../../../common/FormsControls/FormsControls';

function Posts(props) {
    let addPost = (value) => {
        props.addPost(value.NewPostText)
    }

    if (!props.profile) {
        return null
    }
    return (
        <div className={Class.post}>
            <div className={Class.production}>
                <h1 className={Class.title}>My posts</h1>
                <PostProductionForm onSubmit={addPost} />
            </div>

            <div className={Class.wall}>
                {
                    props.posts.map(data =>
                        <div className={Class.item}>
                            {props.profile.photos.large === null
                                ? <img src={fish} alt="" className={Class.img} />
                                : <img src={props.profile.photos.small} alt="" className={Class.img} />
                            }
                            <p className={Class.text}>{data.message}</p>
                        </div>)
                }
            </div>
        </div >
    )
}

const maxLength250 = maxLengthCreator(250)

function PostsProduction(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                name="NewPostText"
                className={Class.input}
                placeholder="Enter your message..."
                validate={[required, maxLength250]}
            />
            <button className={Class.btn}>Send</button>
        </form >
    )
}

const PostProductionForm = reduxForm({ form: 'post' })(PostsProduction)

export default Posts