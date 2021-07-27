import React, { useState } from 'react'

function ProfileStatus(props) {
  const [editMode, changeEditMode] = useState(false)
  const activateEditMode = () => changeEditMode(true)
  const deactivateEditMode = () => {
    changeEditMode(false)
  }
  return (
    <div>
      {editMode ? (
        <div>
          <input autoFocus={true} onBlur={deactivateEditMode} value={props.status} />
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
