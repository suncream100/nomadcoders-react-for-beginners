import styles from "./Loading.module.css"

function Loading() {
  return <div className={styles.wrap_loading}>
    <span className={styles.ico_loading}>Loading...</span>
  </div>
}

export default Loading;