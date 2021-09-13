import preloader from '../../../assets/images/preloader.svg'
import s from './Preloader.module.css'

let Preloader = (props) => {
  return (
    <div className={s.preloader}>
      <img className={s.preloader__image} src={preloader} alt='preloader' />
    </div>
  )
}

export default Preloader
