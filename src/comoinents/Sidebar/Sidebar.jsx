import Class from './Sidebar.module.css';

function Sidebar() {
    return (
        <aside className={Class.sidebar}>
            <nav className={Class.nav}>
                <a href="#" className={`${Class.item} ${Class.active}`}>Profile</a>
                <a href="#" className={Class.item}>Message</a>
                <a href="#" className={Class.item}>News</a>
                <a href="#" className={Class.item}>Music</a>
                <a href="#" className={Class.item}>Setings</a>
            </nav>
        </aside>
    );
}

export default Sidebar;
