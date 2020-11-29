import Description from './Description/Description';
import Posts from './Posts/Posts';
import Class from './Profile.module.css';

function Profile() {
    return (
        <main className={Class.content}>
            <div className={Class.user}>
                <Description />
                <Posts />
            </div>
        </main >
    );
}

export default Profile;
