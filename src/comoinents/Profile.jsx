function Profile() {
    return (
        <main className="content">
            <div className="content-user">
                <div className="content-user__main">
                    <img src="https://www.flaticon.com/svg/static/icons/svg/3802/3802095.svg" alt="" className="content-user__img" />
                    <div className="content-user__main-description">
                        <h1 className="content-user__main-description__name">Alex Circov</h1>
                        <div className="content-user__main-description__other">
                            <div className="content-user__main-description__other-color">Color: Red</div>
                            <div className="content-user__main-description__other-type">Type: Turtle</div>
                        </div>
                    </div>
                </div>
                <div className="content-user__post">
                    <div className="content-user__post-production">
                        <h1 className="content-user__post-production__title">My posts</h1>
                        <textarea className="content-user__post-production__input"></textarea>
                        <a href="#" className="content-user__post-production__btn">Send</a>
                    </div>
                    <div className="content-user__post-wall">
                        <div className="content-user__post-wall__item">
                            <img src="https://www.flaticon.com/svg/static/icons/svg/3802/3802095.svg" className="content-user__post-wall__item-img"></img>
                            <p className="content-user__post-wall__item-text">Hey, why nobody love me?</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Profile;
