import Class from "./FindFriends.module.css";

function FindFrends(props) {

    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, photoURL: "https://www.flaticon.com/svg/static/icons/svg/3802/3802073.svg", followed: false, name: "Oleg", location: { country: "Belarus", city: "Minsk" }, status: "I am looking for a Job right now..." },
            { id: 2, photoURL: "https://www.flaticon.com/svg/static/icons/svg/3802/3802073.svg", followed: true, name: "Julia", location: { country: "Belarus", city: "Minsk" }, status: "Kill in Flor" },
            { id: 3, photoURL: "https://www.flaticon.com/svg/static/icons/svg/3802/3802073.svg", followed: true, name: "Kate", location: { country: "United States", city: "New Yourk" }, status: "Dack, You!" },
            { id: 4, photoURL: "https://www.flaticon.com/svg/static/icons/svg/3802/3802073.svg", followed: false, name: "Nick", location: { country: "Belarus", city: "Minsk" }, status: "I am..." },
            { id: 5, photoURL: "https://www.flaticon.com/svg/static/icons/svg/3802/3802073.svg", followed: true, name: "Alex", location: { country: "Ukrane", city: "Kiev" }, status: "Couse your chanse!" },
            { id: 6, photoURL: "https://www.flaticon.com/svg/static/icons/svg/3802/3802073.svg", followed: false, name: "Dan", location: { country: "Russia", city: "Moscow" }, status: "I am BADMAN" }
        ])
    }

    let ListFastFriends = props.users.map(u =>
        <div className={Class.container}>
            <div className={Class.preview}>
                <img src={u.photoURL} alt="" />
                {u.followed
                    ? <button onClick={() => { props.unfollow(u.id) }}>UnFollow</button>
                    : <button onClick={() => { props.follow(u.id) }}>Follow</button>
                }

            </div>
            <div className={Class.info}>
                <div className={Class.description}>
                    <div className={Class.name}>{u.name}</div>
                    <div className={Class.location}>{u.location.country}, {u.location.city}</div>
                </div>
                <div className={Class.status}>{u.status}</div>
            </div>
        </div>)

    return (
        <div>
            {
                ListFastFriends
            }
        </div>
    )
}

export default FindFrends