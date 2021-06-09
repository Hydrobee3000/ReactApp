import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div className={s.info}>
      <img
        className={s.logo}
        src='https://placepic.ru/wp-content/uploads/2018/01/art-krasivyie-kartinki-Putin-politika-1331294.jpeg'
      />
    </div>
  )
}
export default ProfileInfo
