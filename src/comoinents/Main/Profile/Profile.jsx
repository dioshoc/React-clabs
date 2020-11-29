import Description from './User/User/Description/Description';
import Class from './Profile.module.css';

function Profile() {
    return (
        <main className={Class.content}>
            <div className={Class.user}>
                <div className={Class.main}>
                    <img src="https://www.flaticon.com/svg/static/icons/svg/3802/3802095.svg" alt="" className={Class.img} />
                    <Description />
                </div>
                <div className={Class.post}>
                    <div className={Class.production}>
                        <h1 className={Class.production__title}>My posts</h1>
                        <textarea className={Class.production__input}></textarea>
                        <a href="#" className={Class.production__btn}>Send</a>
                    </div>
                    <div className={Class.wall}>
                        <div className={Class.item}>
                            <img src="https://www.flaticon.com/svg/static/icons/svg/3802/3802095.svg" className={Class.img}></img>
                            <p className={Class.text}>Hey, why nobody love me?</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Profile;
