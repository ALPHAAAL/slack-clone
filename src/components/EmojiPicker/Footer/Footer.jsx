import styles from './Footer.module.scss';
import Emoji from '../../Emoji/Emoji';

export default function Footer() {
  return (
    <div className={styles.container}>
      <button className={styles.addEmojiBtn}>
        Add Emoji
      </button>

      <div className={styles.emojiBtn}>
        <button>
          <Emoji codePoint={'1f91a-1f3fb'} />
        </button>
      </div>
    </div>
  );
}
