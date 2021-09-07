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
    <div className={s.description__block}>
      <aside aria-label='photo' className={s.photo__block}>
        <div className={classes.root}>
          {props.isOwner && (
            <div className={s.select__image}>
              <input
                accept='image/*'
                className={classes.input}
                id='icon-button-file'
                type='file'
                onChange={onMainPhotoSelected}
              />
              <label htmlFor='icon-button-file'>
                <div className={s.icon__image_load}>
                  <IconButton className={classes.button} color='primary' aria-label='upload picture' component='div'>
                    <PhotoCamera />
                  </IconButton>
                </div>
              </label>
            </div>
          )}
          <img
            className={s.main__photo}
            src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}
            alt=''
          />
        </div>
      </aside>
      <div className={s.block__status_name}>
        <h1 className={s.name}>{props.profile.fullName}</h1>

        <h3>Status: {props.profile.aboutMe}</h3>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      </div>
    </div>
  )
}
export default ProfileInfo
