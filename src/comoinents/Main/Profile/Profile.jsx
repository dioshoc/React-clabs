import Description from './Description/Description';
import Posts from './Posts/Posts';
import Class from './Profile.module.css';

function Profile() {
    return (
        <div className={Class.content}>
            <div className={Class.user}>
                <Description />
                <Posts />
            </div>
        </div >
    );
}

export default Profile;
