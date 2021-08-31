const Settings = (props) => {
  useEffect(() => {
    let userId = props.match.params.userId
  })

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }

  return (
    <div></div>
    // {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}></input>}
  )
}

export default Settings
