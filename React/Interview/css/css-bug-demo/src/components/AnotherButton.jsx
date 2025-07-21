import styles from './another-button.module.css'
console.log(styles, 'aaa')
const Button = () => {
  return <button className={styles.button}>Another Button</button>
}

export default Button