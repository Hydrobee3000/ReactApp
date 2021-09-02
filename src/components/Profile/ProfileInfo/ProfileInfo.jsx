import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'
import userPhoto from '../../../assets/images/user.png'
import ProfileStatus from './ProfileStatus/ProfileStatus'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import PhotoCamera from '@material-ui/icons/PhotoCamera'

const useStyles = makeStyles((theme) => ({
  input: {
    display: 'none',
  },
  button: {},
}))

const ProfileInfo = (props) => {
  const classes = useStyles()

  if (!props.profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }

  return (
    <div className={s.descriptionBlock}>
      <aside aria-label='photo' className={s.photoBlock}>
        <div className={s.selectImage}>
          {props.isOwner && (
            <div className={s.iconAddedImage}>
              <input
                accept='image/*'
                className={classes.input}
                id='icon-button-file'
                type='file'
                onChange={onMainPhotoSelected}
              />
              <label htmlFor='icon-button-file'>
                <IconButton className={classes.button} color='primary' aria-label='upload picture' component='span'>
                  <PhotoCamera />
                </IconButton>
              </label>
            </div>
          )}
        </div>
        <div>
          <img className={s.mainPhoto} src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} alt='' />
        </div>
      </aside>
      <div className={s.status}>
        <h1 className={s.name}>{props.profile.fullName}</h1>

        <h3>Status: {props.profile.aboutMe}</h3>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      </div>
    </div>
  )
}
export default ProfileInfo
