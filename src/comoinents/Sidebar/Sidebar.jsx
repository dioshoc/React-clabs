import { NavLink } from 'react-router-dom';
import Class from './Sidebar.module.css';
import { connect } from 'react-redux';


function Sidebar(props) {
    if (props.isAuth) {
        return (
            <aside className={Class.sidebar}>
                <NavLink to="/Profile" activeClassName={Class.active} className={Class.item}>Profile</NavLink>
                <NavLink to="/Messager" activeClassName={Class.active} className={Class.item}>Message</NavLink>
                <NavLink to="/Friends" activeClassName={Class.active} className={Class.item}>Friends</NavLink>
                <NavLink to="/News" activeClassName={Class.active} className={Class.item}>News</NavLink>
                <NavLink to="/Music" activeClassName={Class.active} className={Class.item}>Music</NavLink>
                <NavLink to="/Setings" activeClassName={Class.active} className={Class.item} >Setings</NavLink>
            </aside >
        )
    } else { return null }
}
/*     return (
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
    ) */


const mapStateToProps = (store) => {
    return {
        isAuth: store.Auth.isAuth
    }
}
export default connect(mapStateToProps, null)(Sidebar);
