import { connect } from 'react-redux';
import { addPost } from '../../../../redux/profile-reducer'
import Posts from './Posts';

let mapStateToProps = (state, props) => {
    return {
        posts: state.ProfilePage.PostData,
        profile: props.profile,
        AuthID: state.Auth.id,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (NewPostText) => {
            dispatch(addPost(NewPostText))
        }
    }
}

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostContainer