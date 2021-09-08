import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'
import userPhoto from '../../../assets/images/user.png'
import ProfileStatus from './ProfileStatus/ProfileStatus'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import { Grid } from '@material-ui/core'

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
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={2}>
          <aside aria-label='photo' className={s.photo__block}>
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
                    <IconButton style={{ color: '#2b7a77' }} color='primary' aria-label='upload picture' component='div'>
                      <PhotoCamera />
                    </IconButton>
                  </div>
                </label>
              </div>
            )}
            <div className={s.photo__wrapper}>
              <img
                className={s.main__photo}
                src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}
                alt=''
              />
            </div>
          </aside>
        </Grid>
        <Grid item xs>
          <div className={s.block__status_name}>
            <h1 className={s.name}>{props.profile.fullName}</h1>

            <h3>Status: {props.profile.aboutMe}</h3>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
export default ProfileInfo
