import Class from "./DescriptionStatus.module.css"
import React, { useEffect, useState } from 'react';

const DesctiptionStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activeteMode = () => {
        if (props.userID === props.AuthID) {
            setEditMode(true)
        }
    }
    const deactiveteEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }
    const onUserStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        < div className={Class.descriptionStatus} >
            {!editMode &&
                <div onDoubleClick={activeteMode}>
                    <span >
                        {/* props.userID === props.AuthID ? status || "Double click here for add status" :  */status || "No Status"}
                    </span>
                </div>
            }
            {editMode &&
                <div onBlur={deactiveteEditMode}>
                    <input onChange={onUserStatusChange} autoFocus="true" value={status} />
                </div>
            }
        </ div>
    )
}

export default DesctiptionStatusWithHooks