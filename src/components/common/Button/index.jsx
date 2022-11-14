import styles from '../../../styles/components/common/Button.module.scss';

export default function Button({ children, ...props }) {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
}
