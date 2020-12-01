import Class from './User.module.css'

function User() {
    return (
        <div className={Class.user}>
            <img src="https://www.flaticon.com/svg/static/icons/svg/3802/3802143.svg"></img>
            <div className={Class.name}>Kangaroo</div>
        </div>
    );
}

export default User