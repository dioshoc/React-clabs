import { NavLink } from 'react-router-dom';
import Class from './Sidebar.module.css';
import FastFriends from './FastFriends/FastFriends';

let FastFriendsData = [
    { id: 1, name: "Yah Sher" },
    { id: 2, name: "Gam Year" },
    { id: 3, name: "Sadam Baly" },
]

function Sidebar() {

    let FastFriend = FastFriendsData.map(data => <FastFriends id={data.id} name={data.name} key={data.id} />)

    return (
        <aside className={Class.sidebar}>
            <nav className={Class.nav}>
                <NavLink to="/Profile" activeClassName={Class.active} className={Class.item}>Profile</NavLink>
                <NavLink to="/Messager" activeClassName={Class.active} className={Class.item}>Message</NavLink>
                <NavLink to="/Friends" activeClassName={Class.active} className={Class.item}>Friends</NavLink>
                <NavLink to="/News" activeClassName={Class.active} className={Class.item}>News</NavLink>
                <NavLink to="/Music" activeClassName={Class.active} className={Class.item}>Music</NavLink>
                <NavLink to="/Setings" activeClassName={Class.active} className={Class.item}>Setings</NavLink>

                {
                    FastFriend
                }

            </nav>
        </aside>
    );
}

export default Sidebar;
