import styles from './centerImg.module.css'

function CenterImg({ src }) {
  return (    
    <div className={styles.center}>
        <img src={src}></img>
    </div>
  )
}

export default CenterImg