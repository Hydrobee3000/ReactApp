import s from './ProfileInfo.module.css'
import userPhoto from '../../../assets/images/user.png'
import ProfileStatus from './ProfileStatus/ProfileStatus'
import IconButton from '@material-ui/core/IconButton'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import { Paper } from '@material-ui/core'
import Typography from '@mui/material/Typography'

const ProfileInfo = (props) => {
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }

  return (
    <Paper className={s.profile_info__container}>
      <div className={s.photo__block}>
        <div className={s.photo__wrapper}>
          {props.isOwner && (
            <div className={s.select__image}>
              <input
                accept='image/*'
                className={s.select__image_input}
                id='icon-button-file'
                type='file'
                onChange={onMainPhotoSelected}
              />
              <label htmlFor='icon-button-file'>
                <IconButton className={s.button__load_image} color='primary' aria-label='upload picture' component='div'>
                  <PhotoCamera />
                </IconButton>
              </label>
            </div>
          )}
          <img
            className={s.main__photo}
            src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}
            alt=''
          />
        </div>
      </div>
      <div className={s.details__block}>
        <Typography className={s.name} variant='h4' gutterBottom component='div'>
          {props.profile.fullName}
        </Typography>
        <Typography className={s.status} variant='p' gutterBottom component='div'>
          <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
        </Typography>
      </div>
    </Paper>
  )
}
export default ProfileInfo
