import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../../../redux/profile-reducer'
import Posts from './Posts';

let mapStateToProps = (state) => {
    return {
        posts: state.ProfilePage.PostData,
        newPostText: state.ProfilePage.newPostText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPosts: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
    }
}
const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);



export default PostContainer