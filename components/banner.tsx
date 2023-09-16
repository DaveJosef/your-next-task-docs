import styles from './banner.module.css';

function Banner({ src, alt }) {
  return (
    <div className={styles.banner}>
      <img src={src} alt={alt} />
    </div>
  )
}

export default Banner