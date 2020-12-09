import Class from './Description.module.css'
import Preloader from './../../../common/Preloader'

function Description(props) {
    if (!props.profile) {
        return <Preloader />
    }
    debugger
    return (
        <div className={Class.main}>
            <img src={props.profile.photos.large} alt="" className={Class.img} />
            <div className={Class.description}>
                <h1 className={Class.name}>{props.profile.fullName}</h1>
                <div className={Class.info}>
                    <div>Job search: {props.profile.lookingForAJob === true ? "YEs;)" : "no"}</div>
                    <div>Description: {props.profile.lookingForAJobDescription}</div>
                </div>
            </div>
        </div>
    )
}

export default Description