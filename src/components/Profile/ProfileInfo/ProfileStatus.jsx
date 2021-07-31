import React, { useState } from 'react'

function ProfileStatus(props) {
  const [editMode, changeEditMode] = useState(false)
  const [status, changeStatus] = props.status
  const activateEditMode = () => changeEditMode(true)
  const deactivateEditMode = () => {
    changeEditMode(false)
    props.updateStatus(status)
  }
  const onStatusChange = (e) => {
    changeStatus({
      status: e.currentTarget.value,
    })
  }

  return (
    <div>
      {editMode ? (
        <div>
          <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} />
        </div>
      ) : (
        <div>
          <span onDoubleClick={activateEditMode}>{props.status}</span>
        </div>
      )}
    </div>
  )
}
export default ProfileStatus
