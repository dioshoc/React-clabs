import { NavLink } from 'react-router-dom';
import Class from './Sidebar.module.css';

function Sidebar() {
    return (
        <aside className={Class.sidebar}>
            <nav className={Class.nav}>
                <NavLink to="/Profile" activeClassName={Class.active} className={Class.item}>Profile</NavLink>
                <NavLink to="/Messager" activeClassName={Class.active} className={Class.item}>Message</NavLink>
                <NavLink to="/News" activeClassName={Class.active} className={Class.item}>News</NavLink>
                <NavLink to="/Music" activeClassName={Class.active} className={Class.item}>Music</NavLink>
                <NavLink to="/Setings" activeClassName={Class.active} className={Class.item}>Setings</NavLink>
            </nav>
        </aside>
    );
}

export default Sidebar;
