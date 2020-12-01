import { NavLink } from 'react-router-dom';
import Class from './User.module.css'

function User(props) {
    return (
        <div className={Class.user}>
            <NavLink to={"/Messager/" + props.id} className={Class.link} activeClassName={Class.active}>
                <img src="https://www.flaticon.com/svg/static/icons/svg/3802/3802143.svg"></img>
                <div className={Class.name}>{props.name}</div>
            </NavLink>
        </div>
    );
}

export default User