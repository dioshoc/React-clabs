import { NavLink } from 'react-router-dom';
import Class from './Header.module.css';

function Header(props) {
    return (
        <header className={Class.header}>
            <img src="https://www.flaticon.com/svg/static/icons/svg/3802/3802071.svg" alt="" />
            <h1 className={Class.title}>Amazing animals Team</h1>
            {props.isAuth
                ? <div className={Class.profile}>{props.login} - <button onClick={props.logout}>Log Out</button></div>
                : <div className={Class.login}>{<NavLink to={"/Login"}>Login</NavLink>}</div>}
        </header>
    );
}

export default Header;
