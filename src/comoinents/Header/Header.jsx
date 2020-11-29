import Class from './Header.module.css';

function Header() {
    return (
        <header className={Class.header}>
            <img src="https://www.flaticon.com/svg/static/icons/svg/3802/3802071.svg" alt="" />
            <h1 className={Class.title}>Amazing animals Team</h1>
        </header>
    );
}

export default Header;
