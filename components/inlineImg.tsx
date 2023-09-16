import styles from './inlineImg.module.css';

function InlineImg({ src, alt }) {
  return (
    <img className={styles.inline} src={src} alt={alt}></img>
  )
}

export default InlineImg