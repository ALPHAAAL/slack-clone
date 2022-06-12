import styles from './Emoji.module.scss';

export default function Emoji(props) {
  const { codePoint } = props;

  return (
    <span className={styles.emoji}>
      {String.fromCodePoint(...codePoint.split('-').map((u) => `0x${u}`))}
    </span>
  );
}
