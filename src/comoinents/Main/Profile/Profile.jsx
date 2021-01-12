import Description from './Description/Description';
import DescriptionContainer from './Description/DescriptionContainer';
import PostContainer from './Posts/PostsContainer';
import Class from './Profile.module.css';


function Profile(props) {
    return (
        <div className={Class.content}>
            <div className={Class.user}>
                <DescriptionContainer profile={props.profile} />
                <PostContainer profile={props.profile} />
            </div>
        </div >
    );
}

export default Profile;
