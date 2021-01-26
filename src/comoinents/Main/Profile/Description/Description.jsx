import Class from './Description.module.css'
import Preloader from './../../../common/Preloader'
import fish from "../../../../assets/img/fish.svg";
import DesctiptionStatusWithHooks from './DescriptionStatus/DescriptionStatusWithHooks';

function Description(props) {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={Class.main}>
            <div>
                {props.profile.photos.large === null
                    ? <img src={fish} alt="" className={Class.img} />
                    : <img src={props.profile.photos.large} alt="" className={Class.img} />
                }
            </div>
            <div className={Class.description}>
                <h1 className={Class.name}>{props.profile.fullName}</h1>

                <DesctiptionStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus} userID={props.profile.userId} AuthID={props.AuthID} />

                <div className={Class.info}>
                    <div>Job search: {props.profile.lookingForAJob === true ? "YEs;)" : "no"}</div>
                    <div>Description: {props.profile.lookingForAJobDescription}</div>
                </div>
            </div>
        </div>
    )
}

export default Description