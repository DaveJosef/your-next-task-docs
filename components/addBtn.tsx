import styles from './addBtn.module.css';
import InlineImg from './inlineImg';

function addBtn({ src, alt }) {
  return (
    <span className={styles.add}>
        <InlineImg src={src} alt={alt}/>
    </span>
  )
}

export default addBtn