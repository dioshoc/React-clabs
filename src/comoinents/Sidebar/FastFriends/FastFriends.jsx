import { NavLink } from 'react-router-dom';
import Class from './FastFriends.module.css';

function FastFriends(props) {
    return (
        <NavLink to={"/friends/" + props.id}>
            <div className={Class.friends}>
                <img src="https://www.flaticon.com/svg/static/icons/svg/3802/3802111.svg" alt="" />
                <span className={Class.name}>{props.name}</span>
            </div>
        </NavLink>
    );
}

export default FastFriends;
