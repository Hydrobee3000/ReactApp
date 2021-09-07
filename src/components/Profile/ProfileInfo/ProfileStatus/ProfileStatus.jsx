import React, { useState } from 'react'
import { useEffect } from 'react'
import s from './ProfileStatus.module.css'

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => setEditMode(true)
  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <div className={s.status__input}>
      {!editMode && (
        <span>
          <span onDoubleClick={activateEditMode}>{props.status || '----'}</span>
        </span>
      )}
      {editMode && (
        <span>
          <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} value={status} />
        </span>
      )}
    </div>
  )
}

export default ProfileStatus
