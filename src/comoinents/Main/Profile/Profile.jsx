import Description from './Description/Description';
import PostContainer from './Posts/PostsContainer';
import Class from './Profile.module.css';


function Profile(props) {
    return (
        <div className={Class.content}>
            <div className={Class.user}>
                <Description profile={props.profile} />
                <PostContainer />
            </div>
        </div >
    );
}

export default Profile;
