import React, { useState } from 'react'

const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false)

  const activateEditMode = () => setEditMode(true)

  const deactivateEditMode = () => {
    setEditMode(false)
    //props.updateStatus(state.status)
  }

  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={activateEditMode}>{props.status || '----'}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input onBlur={deactivateEditMode} autoFocus={true} />
        </div>
      )}
    </div>
  )
}

export default ProfileStatusWithHooks
