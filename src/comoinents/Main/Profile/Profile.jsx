import Description from './Description/Description';
import Posts from './Posts/Posts';
import Class from './Profile.module.css';





function Profile(props) {
    return (
        <div className={Class.content}>
            <div className={Class.user}>
                <Description />
                <Posts State={props.State} dispatch={props.dispatch} />
            </div>
        </div >
    );
}

export default Profile;
