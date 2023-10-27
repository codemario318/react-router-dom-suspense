import style from "../css/loading.module.css"

export default function Loading() {
  return (
    <div className={style.loading}>
      <img src="logo.svg" className={style.loadingLogo} />
    </div>
  )
}