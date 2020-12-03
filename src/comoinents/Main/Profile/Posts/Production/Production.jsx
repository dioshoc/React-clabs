import React from 'react'
import Class from './Production.module.css'
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../../../../redux/state'


function Production(props) {

    let newPostElement = React.createRef();

    let addPosts = () => {
        props.dispatch(addPostActionCreator());
    }
    /* current - обращается к html элементу */
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={Class.production}>
            <h1 className={Class.title}>My posts</h1>
            <textarea className={Class.input} ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
            <button onClick={addPosts} className={Class.btn}>Send</button>
        </div>
    )
}

export default Production